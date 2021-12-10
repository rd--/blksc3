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

-- | (Name, InputNames, HasOuputs?, Description, Colour, DefaultInputs)
type Pseudo_UGen = (String, [String], Bool, String, Int, [Double])

pseudo_ugens :: [Pseudo_UGen]
pseudo_ugens =
  [("LinLin"
   ,words "in srclo srchi dstlo dsthi"
   ,True
   ,"Linear range mapping"
   ,150
   ,[0, -1, 1, 0, 1])
  ,("Select2"
   ,words "predicate ifTrue ifFalse"
   ,True
   ,"Select signal branch based on predicate value"
   ,150
   ,[1, 1, 0])
  ,("SinOscBank"
   ,words "freq amp phase"
   ,True
   ,"Parallel bank of SinOsc"
   ,210
   ,[440, 0.1, 0])
  ,("TChoose"
   ,words "trig array"
   ,True
   ,"Randomly select one of several inputs"
   ,30
   ,[1, 0])
  ]

p_blk_gen :: Pseudo_UGen -> String
p_blk_gen (nm, arg, out, _dsc, _clr, _def) = Blockly.blk_gen nm arg out

p_blk_dfn :: Pseudo_UGen -> String
p_blk_dfn (nm, arg, out, dsc, clr, _def) = Blockly.blk_dfn nm arg dsc nm out clr

p_blk_tool :: Pseudo_UGen -> String
p_blk_tool (nm, arg, out, _dsc, _clr, def) = Blockly.blk_tool nm (zip arg def) out

{-
> putStrLn $ unlines $ map p_blk_gen pseudo_ugens
> putStrLn $ unlines $ map p_blk_dfn pseudo_ugens
> putStrLn $ unlines $ map p_blk_tool pseudo_ugens
-}

blk_gen :: IO ()
blk_gen = do
  let lst = sort (concat (map (\(_,_,u) -> u) Blockly.blk_dict))
      u_seq = filter (\u -> Db.ugen_name u `elem` lst) Db.ugen_db
      dir = "/home/rohan/sw/blksc3/"
      gen_js = unlines (map Blockly.u_blk_gen u_seq)
      gen_json = "[\n" ++ (intercalate "    ,\n" (map Blockly.u_blk_dfn u_seq)) ++ "]"
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
