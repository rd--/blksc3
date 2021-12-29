{-

1. Read incoming .stc text at a Websocket and forward over Osc to sclang
2. Generate .js and .json and .xml files for blksc3

-}

import Control.Monad {- base -}
import Data.List {- base -}
import System.IO {- base -}

import qualified Data.ByteString.Char8 as Char8 {- bytestring -}
import qualified Network.WebSockets as Ws {- websockets -}

import qualified Sound.OSC as Osc {- hosc -}

import qualified Sound.SC3.UGen.DB as Db {- hsc3-db -}
import qualified Sound.SC3.UGen.DB.Bindings.Blockly as Blockly {- hsc3-db -}
import qualified Sound.SC3.UGen.DB.Pseudo as Db {- hsc3-db -}
import qualified Sound.SC3.UGen.DB.Record as Db {- hsc3-db -}

import qualified Language.Smalltalk.SuperCollider.Translate as Sc {- stsc3 -}

import qualified Music.Theory.Opt as Opt {- hmt-base -}

-- * Stc to Osc

-- | (host, port, addr).  ("localhost", 9160, "/eval")
type StcToOscOpt = (String, Int, String)

send_osc :: StcToOscOpt -> String -> IO ()
send_osc (osc_host, osc_port, osc_addr) txt = do
  let msg = Osc.message osc_addr [Osc.ASCII_String (Osc.ascii txt)]
  Osc.withTransport (Osc.openUDP osc_host osc_port) (Osc.sendMessage msg)

ws_to_sclang :: StcToOscOpt -> Ws.ServerApp
ws_to_sclang osc_opt rq = do
  let ws_recv c = do
        dat <- Ws.receiveData c
        let txt = Char8.unpack dat
        putStrLn txt
        send_osc osc_opt txt
  c <- Ws.acceptRequest rq
  forever (ws_recv c)

stc_to_osc :: StcToOscOpt -> IO ()
stc_to_osc (ws_host, ws_port, osc_addr) = Ws.runServer ws_host ws_port (ws_to_sclang (ws_host, 57120, osc_addr))

-- * Ws to St

-- | Translate incoming Websocket .stc text to .st and write to stdout.
ws_to_st :: Ws.ServerApp
ws_to_st rq = do
  let ws_recv c = do
        dat <- Ws.receiveData c
        let txt = Char8.unpack dat
        putStrLn (Sc.stcToSt txt)
        hFlush stdout
  c <- Ws.acceptRequest rq
  forever (ws_recv c)

stc_to_st :: (String, Int) -> IO ()
stc_to_st (ws_host, ws_port) = Ws.runServer ws_host ws_port ws_to_st

-- * Blk Gen

blk_gen :: IO ()
blk_gen = do
  let lst = sort (concat (map (\(_,_,u) -> u) Blockly.blk_dict))
      u_seq = filter (\u -> Db.ugen_name u `elem` lst) Db.ugen_db
      p_seq = filter (\p -> Db.pseudo_ugen_name p `elem` lst) Db.pseudo_ugen_db
      dir = "/home/rohan/sw/blksc3/"
      gen_js = unlines (map Blockly.u_blk_gen u_seq ++ map Blockly.p_blk_gen p_seq)
      gen_json = "[\n" ++ (intercalate "    ,\n" (map Blockly.u_blk_dfn u_seq ++ map Blockly.p_blk_dfn p_seq)) ++ "]"
  writeFile (dir ++ "js/blksc3-gen-ugen.js") gen_js
  writeFile (dir ++ "json/blksc3-ugen.json") gen_json
  putStrLn $ unlines $ map Blockly.blk_tool_set Blockly.blk_dict

-- * Main

usage :: Opt.OptHelp
usage =
  ["blksc3 command"
  ,"  blk-gen"
  ,"  stc-to-osc"
  ,"  stc-to-st"]

opt :: [Opt.OptUsr]
opt =
  [("addr","/eval","string","osc message address")
  ,("host","localhost","string","Host name")
  ,("port","9160","int","port number")]

main :: IO ()
main = do
  (o, a) <- Opt.opt_get_arg True usage opt
  case a of
    ["blk-gen"] -> blk_gen
    ["stc-to-osc"] -> stc_to_osc (Opt.opt_get o "host", Opt.opt_read o "port", Opt.opt_get o "addr")
    ["stc-to-st"] -> stc_to_st (Opt.opt_get o "host", Opt.opt_read o "port")
    _ -> Opt.opt_usage usage opt
