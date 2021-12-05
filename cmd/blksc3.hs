{- Read incoming .stc text at a Websocket and forward over Osc to sclang -}

import Control.Monad {- base -}
import qualified Data.ByteString.Char8 as Char8 {- bytestring -}
import qualified Network.WebSockets as Ws {- websockets -}
import qualified Sound.OSC as Osc {- hosc -}

send_sclang :: String -> IO ()
send_sclang txt = do
  let host = "127.0.0.1"
      port = 57120
      msg = Osc.message "/eval" [Osc.ASCII_String (Osc.ascii txt)]
  Osc.withTransport (Osc.openUDP host port) (Osc.sendMessage msg)

ws_to_sclang :: Ws.ServerApp
ws_to_sclang rq = do
  let ws_recv c = do
        dat <- Ws.receiveData c
        let txt = Char8.unpack dat
        putStrLn txt
        send_sclang txt
  c <- Ws.acceptRequest rq
  forever (ws_recv c)

main :: IO ()
main = do
  let host = "192.168.1.104"
      port = 9160
  Ws.runServer host port ws_to_sclang
