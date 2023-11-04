{-

1. Read incoming .stc text at a Websocket and forward over Osc to sclang
2. Generate .js and .json and .xml files for blksc3

-}

import Control.Monad {- base -}
import Data.List {- base -}
import System.IO {- base -}

import qualified Data.ByteString {- bytestring -}
import qualified Data.ByteString.Char8 as Char8 {- bytestring -}
import qualified Network.WebSockets as Ws {- websockets -}

import qualified Sound.Osc as Osc {- hosc -}

import qualified Sound.Sc3.Ugen.Db as Db {- hsc3-db -}
import qualified Sound.Sc3.Ugen.Db.Bindings.Blockly as Blockly {- hsc3-db -}
import qualified Sound.Sc3.Ugen.Db.Pseudo as Db {- hsc3-db -}
import qualified Sound.Sc3.Ugen.Db.Record as Db {- hsc3-db -}
import qualified Sound.Sc3.Ugen.Db.Rename as Rename {- hsc3-db -}

import qualified Language.Smalltalk.SuperCollider.Translate as Sc {- stsc3 -}

import qualified Music.Theory.Opt as Opt {- hmt-base -}

-- * Stc to Osc

-- | (ws-host, ws-port, udp-host, udp-port, osc-addr).  ("localhost", 9160, "localhost", 57120, "/eval")
type StcToOscOpt = (String, Int, String, Int, String)

send_osc :: StcToOscOpt -> String -> IO ()
send_osc (_, _, osc_host, osc_port, osc_addr) txt = do
  let msg = Osc.message osc_addr [Osc.AsciiString (Osc.ascii txt)]
  Osc.withTransport (Osc.openUdp osc_host osc_port) (Osc.sendMessage msg)

-- | Translate incoming Websocket .stc text to Osc message.
ws_to_sclang :: StcToOscOpt -> Ws.ServerApp
ws_to_sclang opt rq = do
  let ws_recv c = do
        dat <- Ws.receiveData c
        let txt = Char8.unpack dat
        putStrLn txt
        send_osc opt txt
  c <- Ws.acceptRequest rq
  forever (ws_recv c)

stc_to_osc :: StcToOscOpt -> IO ()
stc_to_osc opt@(ws_host, ws_port, _, _, _) = Ws.runServer ws_host ws_port (ws_to_sclang opt)

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

-- * Ws Osc to Udp Osc

-- | (ws-host, ws-port, osc-host, osc-port).  ("localhost", 9160, "localhost", 57110)
type WsToUdpOpt = (String, Int, String, Int)

send_udp :: String -> Int -> Data.ByteString.ByteString -> IO ()
send_udp h p dat = Osc.with_udp (Osc.openUdp h p) (\fd -> Osc.udp_send_data fd dat)

-- | Send incoming Websocket Osc out over Udp.
ws_osc_to_udp_osc_app :: WsToUdpOpt -> Ws.ServerApp
ws_osc_to_udp_osc_app (_,_,h,p) rq = do
  let ws_recv c = do
        dat <- Ws.receiveData c
        putStrLn ("ws_recv: #" ++ show (Data.ByteString.length dat))
        send_udp h p dat
        putStrLn "udp sent"
  c <- Ws.acceptRequest rq
  putStrLn "ws_osc_to_udp_osc_app: accept request"
  forever (ws_recv c)

ws_osc_to_udp_osc :: WsToUdpOpt -> IO ()
ws_osc_to_udp_osc opt@(ws_host, ws_port, _, _) = Ws.runServer ws_host ws_port (ws_osc_to_udp_osc_app opt)

-- * Blk Gen

blk_gen :: IO ()
blk_gen = do
  let lst = sort (concat (map (\(_,_,u) -> u) Blockly.blk_dict_elem))
      u_seq = filter (\u -> Rename.sc3_ugen_rename (Db.ugen_name u) `elem` lst) Db.ugen_db
      p_seq = filter (\p -> Db.pseudo_ugen_name p `elem` lst) Db.pseudo_ugen_db
      dir = "/home/rohan/sw/blksc3/"
      pre = "import { blkUgenCodeGen } from './blksc3-gen.js'\n\nexport function blksc3_init_codegen_ugen(blk) {\n";
      gen_js = unlines (pre : map Blockly.u_blk_gen u_seq ++ map Blockly.p_blk_gen p_seq)
      gen_json = "[\n" ++ (intercalate "    ,\n" (map Blockly.u_blk_dfn u_seq ++ map Blockly.p_blk_dfn p_seq)) ++ "]"
  writeFile (dir ++ "js/blksc3-gen-ugen.js") gen_js
  writeFile (dir ++ "json/blksc3-ugen.json") gen_json
  putStrLn $ unlines $ map Blockly.blk_tool_cat Blockly.blk_dict

-- * Main

blksc3_usage :: Opt.OptHelp
blksc3_usage =
  ["blksc3 command"
  ,"  blk-gen"
  ,"  stc-to-osc"
  ,"  stc-to-st"
  ,"  ws-osc-to-udp-osc"]

blksc3_opt :: [Opt.OptUsr]
blksc3_opt =
  [("osc-addr","/eval","string","Osc message address")
  ,("udp-host","localhost","string","Udp host name")
  ,("udp-port","57120","int","Udp port number")
  ,("ws-host","localhost","string","Ws host name")
  ,("ws-port","9160","int","Ws port number")
  ]

main :: IO ()
main = do
  (o, a) <- Opt.opt_get_arg True blksc3_usage blksc3_opt
  let (wh, wp) = (Opt.opt_get o "ws-host", Opt.opt_read o "ws-port")
      uh = Opt.opt_get o "udp-host"
      oa = Opt.opt_get o "osc-addr"
  case a of
    ["blk-gen"] -> blk_gen
    ["stc-to-osc"] -> stc_to_osc (wh, wp, uh, 57120, oa) -- sclang
    ["stc-to-st"] -> stc_to_st (wh, wp)
    ["ws-osc-to-udp-osc"] -> ws_osc_to_udp_osc (wh, wp, uh, 57110) -- scsynth
    _ -> Opt.opt_usage blksc3_usage blksc3_opt
