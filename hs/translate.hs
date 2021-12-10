{-

Translator for simple .stc graphs to Blockly XML notation.

-}

import Data.Char {- base -}
import Data.Maybe {- base -}
import Text.Printf {- base -}

import qualified Sound.SC3.UGen.DB as Db {- hsc3-db -}
import qualified Sound.SC3.UGen.DB.Record as Db {- hsc3-db -}

import qualified Language.Smalltalk.Ansi as St {- stsc3 -}
import           Language.Smalltalk.Ansi.Expr {- stsc3 -}
import qualified Language.Smalltalk.SuperCollider.Translate as Sc {- stsc3 -}

lit_float_xml :: String -> Double -> String
lit_float_xml ty n = printf "<%s type='math_number'><field name='NUM'>%f</field></%s>" ty n ty

lit_int_xml :: String -> Integer -> String
lit_int_xml ty n = printf "<%s type='math_number'><field name='NUM'>%d</field></%s>" ty n ty

named_value_xml :: (String, String) -> String
named_value_xml (k,v) = printf "<value name='%s'>%s</value>" (map toUpper k) v

ugen_xml :: String -> [String] -> String
ugen_xml nm l =
  let u = Db.u_lookup_cs_err nm
      o = isJust (Db.ugen_outputs u)
      i = Db.u_input_names u ++ (if o then ["mul","add"] else [])
      l' = l ++ (if o then [lit_int_xml "shadow" 1, lit_int_xml "shadow" 0] else [])
  in printf "<block type='sc3_%s'>%s</block>" nm (concatMap named_value_xml (zip i l'))

block_xml_for :: String -> [String] -> [String] -> String
block_xml_for nm p d =
  let l = concatMap named_value_xml (zip p d)
  in printf "<block type='sc3_%s'>%s</block>" nm l

{- | Some names are handled specially.

1. OverlapTexture -> overlapTexture
2. KlankSpec -> klankSpec
3. LinLin -> linLin
4. Select2 -> selectTwo
5. TChoose -> tChoose
6. Voicer -> voicer

-}
implicit_send_xml :: String -> [String] -> String
implicit_send_xml nm l =
  case (nm, l) of
    ("OverlapTexture", [_, _, _, _]) ->
      block_xml_for "overlapTexture" ["PROC","SUSTAINTIME","TRANSITIONTIME","OVERLAP"] l
    ("KlankSpec", [_, _, _]) ->
      block_xml_for "klankSpec" ["FREQ","AMP","TIME"] l
    ("LinLin", [_, _, _, _, _]) ->
      block_xml_for "linLin" ["IN","SRCLO","SRCHI", "DSTLO", "DSTHI"] l
    ("Select2", [_, _, _]) ->
      block_xml_for "selectTwo" ["PREDICATE","IFTRUE","IFFALSE"] l
    ("TChoose", [_, _]) ->
      block_xml_for "tChoose" ["TRIG","ARRAY"] l
    ("Voicer", [_, _]) ->
      block_xml_for "voicer" ["COUNT","PROC"] l
    _ -> ugen_xml nm l

-- | Is unary operator an event parameter?
is_event_param :: String -> Bool
is_event_param = flip elem (words "v w y x z o rx ry p px")

-- | Event parameters (v, w, x, y, z &etc)
event_param_xml :: String -> String -> String
event_param_xml o e =
  printf
  "<block type='sc3_eventParam'><field name='PARAM'>%s</field><value name='EVENT'>%s</value></block>"
  o e

{- | Some operators are handled specially.

1. dup -> sc3_arrayFill
-}
uop_xml :: String -> String -> String
uop_xml o e =
  case o of
    "dup" ->
      printf
      "<block type='sc3_arrayFill'><value name='PROC'>%s</value><value name='COUNT'>%s</value></block>"
      e (lit_int_xml "block" 2)
    _ ->
      printf
      "<block type='sc3_UnaryOp'><field name='OP'>%s</field><value name='IN'>%s</value></block>"
      o e

binop_xml :: String -> String -> String -> String
binop_xml o lhs rhs =
  printf
  "<block type='sc3_BinaryOp'><field name='OP'>%s</field><value name='LHS'>%s</value><value name='RHS'>%s</value></block>"
  o lhs rhs

{- | Some operators are handled specially.

1. collect: creates an sc3_arrayCollect block
2. dup: creates an sc3_arrayFill block
3. to: creates an sc3_arrayFromTo block
4. timesRepeat: creates an sc3_timesRepeat block
-}
keybinop_xml :: String -> String -> String -> String
keybinop_xml msg lhs rhs  =
  case msg of
    "collect:" ->
      printf
      "<block type='sc3_arrayCollect'><value name='ARRAY'>%s</value><value name='PROC'>%s</value></block>"
      lhs rhs
    "dup:" ->
      printf
      "<block type='sc3_arrayFill'><value name='PROC'>%s</value><value name='COUNT'>%s</value></block>"
      lhs rhs
    "timesRepeat:" ->
      printf
      "<block type='sc3_timesRepeat'><value name='COUNT'>%s</value><value name='PROC'>%s</value></block>"
      lhs rhs
    "to:" ->
      printf
      "<block type='sc3_arrayFromTo'><value name='FROM'>%s</value><value name='TO'>%s</value></block>"
      lhs rhs
    _ ->
      printf
      "<block type='sc3_KeywordBinaryOp'><field name='OP'>%s</field><value name='LHS'>%s</value><value name='RHS'>%s</value></block>"
      (init msg) lhs rhs

var_decl :: [String] -> String
var_decl v =
  if null v
  then ""
  else printf "<variables>%s</variables>" (concatMap (\x -> concat ["<variable>",x,"</variable>"]) v)

var_set :: String -> String -> String
var_set x y = printf "<block type='variables_set'><field name='VAR'>%s</field><value name='VALUE'>%s</value></block>" x y

var_get :: String -> String
var_get x = printf "<block type='variables_get'><field name='VAR'>%s</field></block>" x

-- | Zero-indexed.
array_elem_xml :: Int -> String -> String
array_elem_xml k x = printf "<value name='ADD%d'>%s</value>" k x

array_xml :: [String] -> String
array_xml l = printf "<block type='lists_create_with'><mutation items='%d'></mutation>%s</block>" (length l) (concat (zipWith array_elem_xml [0..] l))

proc_xml :: [String] -> [String] -> [Expr t] -> String
proc_xml a v e =
  case a of
    [] ->
      printf
      "<block type='sc3_Proc0'><value name='PROC'>%s%s</value></block>"
      (var_decl v)
      (concatMap expr_xml e)
    [p] ->
      printf
      "<block type='sc3_Proc1'><value name='VAR'>%s</value><value name='PROC'>%s%s</value></block>"
      (var_get p)
      (var_decl v)
      (concatMap expr_xml e)
    _ -> error "proc_xml: not 0 or 1 argument"

comment_xml :: St.Comment -> String
comment_xml c =
  if null c
  then ""
  else printf "<block type='sc3_Comment'><field name='COMMENT'>%s</field></block>" (if last c == '\n' then init c else c)

expr_xml :: Expr t -> String
expr_xml e =
  case e of
    Array l -> array_xml (map expr_xml l)
    Assignment p q -> var_set p (expr_xml q)
    Identifier x -> var_get x
    Literal (St.NumberLiteral (St.Float n)) -> lit_float_xml "block" n
    Literal (St.NumberLiteral (St.Int n)) -> lit_int_xml "block" n
    Send (Identifier u) (Message (St.KeywordSelector "apply:") [Array l]) -> implicit_send_xml u (map expr_xml l) -- Saw(440)
    Send r (Message (St.UnarySelector m) []) -> (if is_event_param m then event_param_xml else uop_xml) m (expr_xml r) -- 60.midicps
    Send lhs (Message (St.BinarySelector m) [rhs]) -> binop_xml m (expr_xml lhs) (expr_xml rhs) -- 1 + 2
    Send lhs (Message (St.KeywordSelector m) [rhs]) -> keybinop_xml m (expr_xml lhs) (expr_xml rhs) -- 1.max(2)
    Lambda _ a (St.Temporaries v) e_seq -> proc_xml a v e_seq
    Init c _ s -> maybe "" comment_xml c ++ expr_seq_xml s
    _ -> error ("expr_xml: " ++ show e)

expr_seq_xml :: [Expr t] -> String
expr_seq_xml = concatMap expr_xml

in_xml :: String -> String
in_xml x = concat ["<xml>",x,"</xml>"]

stc_to_xml :: String -> String
stc_to_xml = in_xml . expr_xml . Sc.stcToExpr

stc_file_to_xml_file :: FilePath -> IO ()
stc_file_to_xml_file fn = do
  let dir = "/home/rohan/sw/blksc3/help/graph/"
  txt <- readFile (dir ++ fn)
  writeFile (dir ++ fn ++ ".xml") (in_xml (expr_xml (Sc.stcToExpr txt)))

blk_au_graph_filename :: String -> String -> String
blk_au_graph_filename au nm =
  let rewrite = map toLower .
                map (\c -> if c == ' ' then '-' else c) .
                mapMaybe (\c -> if c `elem` "()?" then Nothing else Just c)
  in printf "%s-%s" (map toLower au) (rewrite nm)

blk_au_graph_option :: String -> String -> String
blk_au_graph_option au nm =
  printf "<option value='%s'>%s - %s</option>" (blk_au_graph_filename au nm) au nm

-- > putStrLn $ unlines $ concatMap (\(au, gr) -> map (blk_au_graph_option au) gr) blk_graphs
blk_graphs :: [(String, [String])]
blk_graphs =
  [("F0",
     ["Tw 0030", "Tw 0033"
     ,"Tw 0041", "Tw 0045"
     ,"Tw 0051", "Tw 0059"
     ,"Tw 0084"
     ,"Tw 0134"
     ,"Tw 0220", "Tw 0225"
     ,"Tw 0456384156159574016"
     ,"Tw 1084601286488674304"
     ,"Tw 1125557217086857216"
     ,"Tw 1138498427241861122"
     ,"Tw 1343283697840226307"
     ,"Tw 1452318302768963589"
     ,"Tw 1453520892374441986"
     ,"Tw 1464534258173849611"
     ])
  ,("JAR", ["1-4Qx", "rk_20120422"])
  ,("JMcC",
     ["Analog Bubbles", "Analog Bubbles (Mouse)", "Analog Bubbles (Var)"
     ,"Babbling Brook"
     ,"Birdies"
     ,"Coolant", "Coolant (Texture)"
     ,"Deep Trip"
     ,"Demanding Studies"
     ,"Harmonic Zither"
     ,"Lfo Modulation"
     ,"Modal Space", "Modal Space (Collect)"
     ,"Moto Rev"
     ,"Pond Life", "Pond Life (Texture)"
     ,"Plucked Strings"
     ,"Random Panning Sines"
     ,"Repeating Harmonic Klank"
     ,"Reverberated Sine Percussion"
     ,"Sample and Hold Liquidities", "Sample and Hold Liquidities (External)"
     ,"Scratchy"
     ,"Sprinkler", "Sprinkler (Mouse)"
     ,"Tank"
     ,"Theremin"
     ,"Tremulate", "Tremulate (Event)"
     ,"Uplink"
     ,"Why SuperCollider?"
     ,"Wind Metals"
     ])
  ,("NV"
    ,["Tw 2013-12-04"
     ,"Tw 04"
     ,"Tw 40"
     ,"Tw 41"])
  ,("PJ"
   ,["Forest Sounds"])
  ,("TW"
   ,["Tw 01"])
  ]

gen_xml :: IO ()
gen_xml = do
  let rw = stc_file_to_xml_file
  rw "../block/CombC.1.stc"

{-

> lit_float_xml "shadow" 220
> lit_int_xml "shadow" 220
> ugen_xml "SinOsc" [lit_int_xml "shadow" 110,lit_float_xml "shadow" 0.5]
> uop_xml "midicps" (lit_int_xml "shadow" 60)
> binop_xml "+" (lit_int_xml "shadow" 60) (lit_float_xml "shadow" 0.75)
> var_decl ["x","o"]
> var_set "z" (lit_float_xml "shadow" 0.75)
> array_xml [lit_int_xml "shadow" 1,lit_float_xml "shadow" 2.3,lit_int_xml "shadow" 4]

rw = stc_to_xml
rw "5.abs"
rw "SinOsc(440, 0)"
rw "{ Rand(0, 1) }"
rw "{ arg tr; TRand(0, 1, tr) }"
rw "{ Rand(0, 1) }.dup"
rw "{ Rand(0, 1) }.dup(5)"
rw "1.to(9)"
rw "[1, 2, 3].collect({ arg i; i * i })"

-}
