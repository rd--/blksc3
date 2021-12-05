import Data.List {- base -}

import qualified Sound.SC3.UGen.DB as Db {- hsc3-db -}
import           Sound.SC3.UGen.DB.Bindings.Blockly {- hsc3-db -}
import qualified Sound.SC3.UGen.DB.Record as Db {- hsc3-db -}

main :: IO ()
main = do
  let lst = sort (concat (map (\(_,_,u) -> u) blk_dict))
  let u_seq = filter (\u -> Db.ugen_name u `elem` lst) Db.ugen_db
  let dir = "/home/rohan/sw/blksc3/"
  writeFile (dir ++ "js/blksc3-gen-ugen.js") (unlines (map u_blk_gen u_seq))
  writeFile (dir ++ "json/blksc3-ugen.json") ("[\n" ++ (intercalate "    ,\n" (map u_blk_dfn u_seq)) ++ "]")
  putStrLn $ unlines $ map blk_tool_set blk_dict
