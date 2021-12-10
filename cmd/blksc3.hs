{-

1. Read incoming .stc text at a Websocket and forward over Osc to sclang
2. Generate .js and .json and .xml files for blksc3

-}

import Control.Monad {- base -}
import Data.List {- base -}
import System.Environment {- base -}

import qualified Data.ByteString.Char8 as Char8 {- bytestring -}
import qualified Network.WebSockets as Ws {- websockets -}

import qualified Sound.OSC as Osc {- hosc -}
import qualified Sound.SC3.UGen.DB as Db {- hsc3-db -}
import qualified Sound.SC3.UGen.DB.Bindings.Blockly as Blockly {- hsc3-db -}
import qualified Sound.SC3.UGen.DB.Pseudo as Db {- hsc3-db -}
import qualified Sound.SC3.UGen.DB.Record as Db {- hsc3-db -}

-- * Stc to Osc

send_sclang :: String -> IO ()
send_sclang txt = do
  let sc_host = "127.0.0.1"
      sc_port = 57120
      msg = Osc.message "/eval" [Osc.ASCII_String (Osc.ascii txt)]
  Osc.withTransport (Osc.openUDP sc_host sc_port) (Osc.sendMessage msg)

ws_to_sclang :: Ws.ServerApp
ws_to_sclang rq = do
  let ws_recv c = do
        dat <- Ws.receiveData c
        let txt = Char8.unpack dat
        putStrLn txt
        send_sclang txt
  c <- Ws.acceptRequest rq
  forever (ws_recv c)

stc_to_osc :: IO ()
stc_to_osc = do
  let ws_host = "192.168.1.102"
      ws_port = 9160
  Ws.runServer ws_host ws_port ws_to_sclang

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

usage :: [String]
usage =
  ["blksc3 command"
  ,"  blk-gen"
  ,"  stc-to-osc"]

main :: IO ()
main = do
  a <- getArgs
  case a of
    ["blk-gen"] -> blk_gen
    ["stc-to-osc"] -> stc_to_osc
    _ -> putStrLn (unlines usage)
