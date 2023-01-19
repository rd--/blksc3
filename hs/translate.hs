{-

Translator for simple .stc/.spl graphs to Blockly .xml notation.
The .xml notation is old, there's a newer .json notation.

-}

import Data.Char {- base -}
import Data.Either {- base -}
import Data.List {- base -}
import Data.Maybe {- base -}
import Text.Printf {- base -}

import qualified Sound.Sc3.Ugen.Db as Db {- hsc3-db -}
import qualified Sound.Sc3.Ugen.Db.Pseudo as Db {- hsc3-db -}
import qualified Sound.Sc3.Ugen.Db.Record as Db {- hsc3-db -}
import qualified Sound.Sc3.Ugen.Db.Rename as Db {- hsc3-db -}

import qualified Language.Smalltalk.Ansi as St {- stsc3 -}
import Language.Smalltalk.Ansi.Expr {- stsc3 -}
import qualified Language.Smalltalk.SuperCollider.Translate as Sc {- stsc3 -}

-- > lit_float_xml "shadow" 220
lit_float_xml :: String -> Double -> String
lit_float_xml ty n = printf "<%s type='math_number'><field name='NUM'>%f</field></%s>" ty n ty

-- > lit_int_xml "shadow" 220
lit_int_xml :: String -> Integer -> String
lit_int_xml ty n = printf "<%s type='math_number'><field name='NUM'>%d</field></%s>" ty n ty

lit_str_xml :: String -> String -> String
lit_str_xml ty s = printf "<%s type='text'><field name='TEXT'>%s</field></%s>" ty s ty

lit_xml :: String -> St.Literal -> String
lit_xml ty l =
  case l of
  St.NumberLiteral (St.Float n) -> lit_float_xml ty n
  St.NumberLiteral (St.Int n) -> lit_int_xml ty n
  St.StringLiteral s -> lit_str_xml ty s
  St.SymbolLiteral s -> lit_str_xml ty s
  St.ArrayLiteral a -> array_xml (map (lit_xml ty . fromLeft (error "non-literal in literal array")) a)
  _ -> error "lit_xml"

named_value_xml :: (String, String) -> String
named_value_xml (k,v) = printf "<value name='%s'>%s</value>" (map toUpper k) v

ugen_param :: String -> ([String], Bool)
ugen_param nm =
  case Db.u_lookup_cs nm of
    Just u -> (Db.u_input_names u, isJust (Db.ugen_outputs u))
    Nothing -> case Db.pseudo_ugen_db_lookup nm of
                 Just (_,p,o,_,_)  -> (p, o)
                 Nothing -> error ("ugen_param: " ++ nm)

-- > ugen_xml "SinOsc" [lit_int_xml "shadow" 110,lit_float_xml "shadow" 0.5]
ugen_xml :: String -> [String] -> String
ugen_xml stcNm l =
  let nm = Db.sc3_ugen_initial_name stcNm
      (p, o) = ugen_param nm
      i = p ++ (if o then ["mul","add"] else [])
      l' = l ++ (if o then [lit_int_xml "shadow" 1, lit_int_xml "shadow" 0] else [])
  in printf "<block type='sc3_%s' inline='true'>%s</block>" nm (concatMap named_value_xml (zip i l'))

block_xml_for :: String -> [String] -> [String] -> String
block_xml_for nm p d =
  let l = concatMap named_value_xml (zip p d)
  in printf "<block type='sc3_%s' inline='true'>%s</block>" nm l

{- | Some names are handled specially: {Overlap|XFade}Texture, SoundFileBuffer, Voicer, VoiceWriter

> implicit_send_xml "SinOsc" ["440", "0"]
-}
implicit_send_xml :: String -> [String] -> String
implicit_send_xml nm l =
  case (nm, l) of
    ("OverlapTexture", [_, _, _, _]) ->
      block_xml_for "OverlapTexture" ["PROC","SUSTAINTIME","TRANSITIONTIME","OVERLAP"] l
    ("XFadeTexture", [_, _, _]) ->
      block_xml_for "XFadeTexture" ["PROC","SUSTAINTIME","TRANSITIONTIME"] l
    ("SoundFileBuffer", [_, _]) ->
      block_xml_for "SoundFileBuffer" ["SOUNDFILEID", "NUMBEROFCHANNELS"] l
    ("Voicer", [_, _]) ->
      block_xml_for "Voicer" ["COUNT","PROC"] l
    ("VoiceWriter", [_, _]) ->
      block_xml_for "VoiceWriter" ["COUNT","PROC"] l
    _ -> ugen_xml nm l

-- | Is unary operator an event parameter?
is_event_param :: String -> Bool
is_event_param = flip elem (words "v w y x z o rx ry p px")

-- | Event parameters (v, w, x, y, z &etc)
event_param_xml :: String -> String -> String
event_param_xml o e =
  printf
  "<block type='sc3_EventParam'><field name='PARAM'>%s</field><value name='EVENT'>%s</value></block>"
  o e

-- | Method names that belong to Array not UGen
array_proc_1 :: [String]
array_proc_1 = ["asLocalBuf","choose","concatenation","first","mean","reverse","second","size","sum","third","transpose"]

{- | Some operators are handled specially.

1. dup -> sc3_ArrayFill
2. value -> sc3_Value0
3. splay2 -> sc3_Splay2
4. array operators -> sc3_ArrayProc1

> uop_xml "MidiCps" (lit_int_xml "shadow" 60)
-}
uop_xml :: String -> String -> String
uop_xml o e =
  case o of
    "dup" ->
      printf
      "<block type='sc3_ArrayFill' inline='true'><value name='PROC'>%s</value><value name='COUNT'>%s</value></block>"
      e (lit_int_xml "block" 2)
    "value" ->
      printf
      "<block type='sc3_Value0' inline='true'><value name='PROC'>%s</value></block>"
      e
    "splay2" ->
      printf
      "<block type='sc3_Splay2' inline='true'><value name='INARRAY'>%s</value></value></block>"
      e
    _ ->
      let ty = if o `elem` array_proc_1 then "ArrayProc1" else "UnaryOp"
      in printf
         "<block type='sc3_%s'><field name='OP'>%s</field><value name='IN'>%s</value></block>"
         ty o e

-- | Operator and method names that belong to Array not UGen
array_proc_2 :: [String]
array_proc_2 = ["++","collect","at"]

{- | Some operators are handled specially.

1. array operators -> ArrayProc2

> binop_xml "+" (lit_int_xml "shadow" 60) (lit_float_xml "shadow" 0.75)
-}
binop_xml :: String -> String -> String -> String
binop_xml o lhs rhs =
  let ty = if o `elem` array_proc_2 then "ArrayProc2" else "BinaryOp"
  in printf
     "<block type='sc3_%s' inline='true'><field name='OP'>%s</field><value name='LHS'>%s</value><value name='RHS'>%s</value></block>"
     ty o lhs rhs

{- | Some operators are handled specially.

1. array operators -> ArrayProc2
2. dup -> ArrayFill
3. to -> ArrayFromTo
4. timesRepeat -> TimesRepeat
5. value -> Value1
-}
keybinop_xml :: String -> String -> String -> String
keybinop_xml msg lhs rhs  =
  case msg of
    "dup:" ->
      printf
      "<block type='sc3_ArrayFill' inline='true'><value name='PROC'>%s</value><value name='COUNT'>%s</value></block>"
      lhs rhs
    "timesRepeat:" ->
      printf
      "<block type='sc3_TimesRepeat'><value name='COUNT'>%s</value><value name='PROC'>%s</value></block>"
      lhs rhs
    "to:" ->
      printf
      "<block type='sc3_ArrayFromTo' inline='true'><value name='FROM'>%s</value><value name='TO'>%s</value></block>"
      lhs rhs
    "value:" ->
      printf
      "<block type='sc3_Value1' inline='true'><value name='PROC'>%s</value><value name='VALUE'>%s</value></block>"
      lhs rhs
    _ ->
      let ty = if (init msg) `elem` array_proc_2 then "ArrayProc2" else "KeywordBinaryOp"
      in printf
         "<block type='sc3_%s' inline='true'><field name='OP'>%s</field><value name='LHS'>%s</value><value name='RHS'>%s</value></block>"
         ty (init msg) lhs rhs

keyternaryop_xml :: String -> String -> String -> String -> String
keyternaryop_xml msg p1 p2 p3  =
  case msg of
    "value:value:" ->
      printf
      "<block type='sc3_Value2' inline='true'><value name='PROC'>%s</value><value name='VALUE1'>%s</value><value name='VALUE2'>%s</value></block>"
      p1 p2 p3
    _ -> error "keyternaryop_xml?"

-- > var_decl ["x","o"]
var_decl :: [String] -> String
var_decl v =
  if null v
  then ""
  else printf "<variables>%s</variables>" (concatMap (\x -> concat ["<variable>",x,"</variable>"]) v)

-- > var_set "z" (lit_float_xml "shadow" 0.75)
var_set :: String -> String -> String
var_set =
  printf
  "<block type='variables_set'><field name='VAR'>%s</field><value name='VALUE'>%s</value></block>"

var_set_then :: String -> String -> String -> String
var_set_then =
  printf
  "<block type='variables_set'><field name='VAR'>%s</field><value name='VALUE'>%s</value><next>%s</next></block>"

-- | Booleans are special cases
var_get :: String -> String
var_get x =
  case x of
    "true" -> "<block type='logic_boolean'><field name='BOOL'>TRUE</field></block>"
    "false" -> "<block type='logic_boolean'><field name='BOOL'>FALSE</field></block>"
    _ -> printf "<block type='variables_get'><field name='VAR'>%s</field></block>" x

-- | Zero-indexed.
array_elem_xml :: Int -> String -> String
array_elem_xml k x = printf "<value name='ADD%d'>%s</value>" k x

-- > array_xml [lit_int_xml "shadow" 1,lit_float_xml "shadow" 2.3,lit_int_xml "shadow" 4]
array_xml :: [String] -> String
array_xml l =
  printf
  "<block type='lists_create_with' inline='true'><mutation items='%d'></mutation>%s</block>"
  (length l) (concat (zipWith array_elem_xml [0..] l))

-- | If the last expression is an assignment (ie. if the rhs is null), return the variable getter.
expr_group_assignments :: [Expr] -> ([Expr], Expr)
expr_group_assignments e =
  case span exprIsAssignment e of
    (a, []) -> (a, Identifier (fromMaybe (error "expr_group_assignments: id?") (assignmentIdentifier (last a))))
    (a, [v]) -> (a, v)
    _ -> error "expr_group_assignments?"

{- | Xml for Proc (Lambda).
     If the last expression is an assignment return the variable assigned to.
-}
proc_xml :: [String] -> [String] -> [Expr] -> String
proc_xml a _v e =
  case (a, expr_group_assignments e) of
    ([], ([], r)) ->
      printf
      "<block type='sc3_Proc0' inline='true'><value name='RETURN'>%s</value></block>"
      (expr_xml r)
    ([], (s, r)) ->
      printf
      "<block type='sc3_Proc0Stm'><value name='STATEMENTS'>%s</value><value name='RETURN'>%s</value></block>"
      (assign_seq_xml s) (expr_xml r)
    ([a1], ([], r)) ->
      printf
      "<block type='sc3_Proc1' inline='true'><value name='VAR'>%s</value><value name='RETURN'>%s</value></block>"
      (var_get a1) (expr_xml r)
    ([a1], (s, r)) ->
      printf
      "<block type='sc3_Proc1Stm'><value name='VAR'>%s</value><value name='STATEMENTS'>%s</value><value name='RETURN'>%s</value></block>"
      (var_get a1) (assign_seq_xml s) (expr_xml r)
    ([a1, a2], ([], r)) ->
      printf
      "<block type='sc3_Proc2' inline='true'><value name='VAR1'>%s</value><value name='VAR2'>%s</value><value name='RETURN'>%s</value></block>"
      (var_get a1) (var_get a2)  (expr_xml r)
    ([a1, a2], (s, r)) ->
      printf
      "<block type='sc3_Proc2Stm'><value name='VAR1'>%s</value><value name='VAR2'>%s</value><value name='STATEMENTS'>%s</value><value name='RETURN'>%s</value></block>"
      (var_get a1) (var_get a2) (assign_seq_xml s) (expr_xml r)
    _ -> error (show ("proc_xml: not 0, 1 or 2 argument", a, e))

comment_xml :: St.Comment -> String
comment_xml c =
  if null c
  then ""
  else printf "<block type='sc3_Comment'><field name='COMMENT'>%s</field></block>" (if last c == '\n' then init c else c)

expr_xml :: Expr -> String
expr_xml e =
  case e of
    Array l -> array_xml (map expr_xml l)
    Assignment p q -> var_set p (expr_xml q)
    Identifier x -> var_get x
    Literal l -> lit_xml "block" l
    Send (Identifier u) (Message (St.KeywordSelector "apply:") [Array l]) -> implicit_send_xml u (map expr_xml l) -- Saw(440)
    Send r (Message (St.UnarySelector m) []) -> (if is_event_param m then event_param_xml else uop_xml) m (expr_xml r) -- 60.MidiCps
    Send lhs (Message (St.BinarySelector m) [rhs]) -> binop_xml m (expr_xml lhs) (expr_xml rhs) -- 1 + 2
    Send lhs (Message (St.KeywordSelector m) [rhs]) -> keybinop_xml m (expr_xml lhs) (expr_xml rhs) -- 1.Max(2)
    Send p1 (Message (St.KeywordSelector m) [p2, p3]) -> keyternaryop_xml m (expr_xml p1) (expr_xml p2) (expr_xml p3) -- 1.Max(2)
    Lambda _ a v (e_seq, Nothing) -> proc_xml a v e_seq
    Init c _ s -> maybe "" comment_xml c ++ expr_seq_xml s
    _ -> error ("expr_xml: " ++ show e)

expr_seq_xml :: [Expr] -> String
expr_seq_xml = concatMap expr_xml

assign_seq_xml :: [Expr] -> String
assign_seq_xml e_seq =
  case e_seq of
    [Assignment p q] -> var_set p (expr_xml q)
    (Assignment p q : e_rem) -> var_set_then p (expr_xml q) (assign_seq_xml e_rem)
    _ -> error ("assign_seq_xml: " ++ show e_seq)

in_xml :: String -> String
in_xml x = concat ["<xml>",x,"</xml>"]

-- | .stc files may have .md notes sections, discard these.
extract_stc_graph :: String -> String
extract_stc_graph = unlines . takeWhile (not . isPrefixOf ";; ----") . lines

stc_to_xml :: String -> String
stc_to_xml = in_xml . expr_xml . Sc.stcToExpr

{-
stc_file_to_xml_file "graph/F0 - Tw 0297.stc"
stc_file_to_xml_file "guide/1.x User Programs.stc"
stc_file_to_xml_file "ugen/TChoose.2.stc"
-}
stc_file_to_xml_file :: FilePath -> IO ()
stc_file_to_xml_file fn = do
  let dir = "/home/rohan/sw/blksc3/help/"
  txt <- readFile (dir ++ fn)
  writeFile (dir ++ fn ++ ".xml") (in_xml (expr_xml (Sc.stcToExpr (extract_stc_graph txt))))

{-

rw = stc_to_xml
rw "5.abs"
rw "SinOsc(440, 0)"
rw "SinOsc(440, 0).abs"
rw "{ Rand(0, 1) }"
rw "{ :tr | TRand(0, 1, tr) }"
rw "{ Rand(0, 1) }.dup"
rw "{ Rand(0, 1) }.dup(5)"
rw "1.to(9)"
rw "[1, 2, 3].collect({ :i | i * i })"

-}
