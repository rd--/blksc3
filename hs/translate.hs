{-

Translator for simple .stc graphs to Blockly .xml notation.
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

import qualified Language.Smalltalk.Ansi as St {- stsc3 -}
import Language.Smalltalk.Ansi.Expr {- stsc3 -}
import qualified Language.Smalltalk.SuperCollider.Translate as Sc {- stsc3 -}

lit_float_xml :: String -> Double -> String
lit_float_xml ty n = printf "<%s type='math_number'><field name='NUM'>%f</field></%s>" ty n ty

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

ugen_xml :: String -> [String] -> String
ugen_xml nm l =
  let (p, o) = ugen_param nm
      i = p ++ (if o then ["mul","add"] else [])
      l' = l ++ (if o then [lit_int_xml "shadow" 1, lit_int_xml "shadow" 0] else [])
  in printf "<block type='sc3_%s' inline='true'>%s</block>" nm (concatMap named_value_xml (zip i l'))

block_xml_for :: String -> [String] -> [String] -> String
block_xml_for nm p d =
  let l = concatMap named_value_xml (zip p d)
  in printf "<block type='sc3_%s' inline='true'>%s</block>" nm l

{- | Some names are handled specially: OverlapTexture, SoundFileBuffer, Voicer, VoiceWriter

> implicit_send_xml "SinOsc" ["440", "0"]
-}
implicit_send_xml :: String -> [String] -> String
implicit_send_xml nm l =
  case (nm, l) of
    ("OverlapTexture", [_, _, _, _]) ->
      block_xml_for "OverlapTexture" ["PROC","SUSTAINTIME","TRANSITIONTIME","OVERLAP"] l
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
array_proc_2 = ["++","collect","nth"]

{- | Some operators are handled specially.

1. array operators -> ArrayProc2
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

var_decl :: [String] -> String
var_decl v =
  if null v
  then ""
  else printf "<variables>%s</variables>" (concatMap (\x -> concat ["<variable>",x,"</variable>"]) v)

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
    Send r (Message (St.UnarySelector m) []) -> (if is_event_param m then event_param_xml else uop_xml) m (expr_xml r) -- 60.midicps
    Send lhs (Message (St.BinarySelector m) [rhs]) -> binop_xml m (expr_xml lhs) (expr_xml rhs) -- 1 + 2
    Send lhs (Message (St.KeywordSelector m) [rhs]) -> keybinop_xml m (expr_xml lhs) (expr_xml rhs) -- 1.max(2)
    Send p1 (Message (St.KeywordSelector m) [p2, p3]) -> keyternaryop_xml m (expr_xml p1) (expr_xml p2) (expr_xml p3) -- 1.max(2)
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
extract_stc_graph = unlines . takeWhile (not . isPrefixOf "//----") . lines

stc_to_xml :: String -> String
stc_to_xml = in_xml . expr_xml . Sc.stcToExpr

stc_file_to_xml_file :: FilePath -> IO ()
stc_file_to_xml_file fn = do
  let dir = "/home/rohan/sw/blksc3/help/graph/"
  txt <- readFile (dir ++ fn)
  writeFile (dir ++ fn ++ ".xml") (in_xml (expr_xml (Sc.stcToExpr (extract_stc_graph txt))))

filename_rewriter :: (Char -> Char) -> String -> String
filename_rewriter caseFunc =
  map caseFunc .
  map (\c -> if c == ' ' then '-' else c) .
  mapMaybe (\c -> if c `elem` "()?," then Nothing else Just c)

blk_au_graph_filename :: String -> String -> String
blk_au_graph_filename au nm = printf "%s-%s" (map toLower au) (filename_rewriter toLower nm)

blk_au_graph_option :: String -> String -> String
blk_au_graph_option au nm =
  printf "<option value='%s'>%s - %s</option>" (blk_au_graph_filename au nm) au nm

blk_graphs :: [(String, [String])]
blk_graphs =
  [("AN", ["Tw 99846300173991936"])
  ,("CR", ["Lucier"])
  ,("DMC", ["PM Crotale"])
  ,("DS", ["Tw 19", "Tw 22"])
  ,("DST", ["1-5fc"])
  ,("ES",
    ["Tw 435684664200540161"
    -- ,"Tw 570012853274615808" -- GreyholeRaw
    ])
  ,("F0",
     ["20020817"
     ,"Pkt 00", "Pkt 07"
     ,"Pkt 26", "Pkt 28"
     ,"Tw 0026"
     ,"Tw 0030", "Tw 0033"
     ,"Tw 0041", "Tw 0045"
     ,"Tw 0051", "Tw 0059"
     ,"Tw 0061"
     ,"Tw 0084"
     ,"Tw 0134", "Tw 0134 (Var)", "Tw 0164", "Tw 0165"
     ,"Tw 0220", "Tw 0225"
     ,"Tw 0454598285861617665"
     ,"Tw 0456384156159574016"
     ,"Tw 0839296011982024704"
     ,"Tw 1084601286488674304"
     ,"Tw 1115745664523218944"
     ,"Tw 1125557217086857216"
     ,"Tw 1138498427241861122"
     ,"Tw 1197185125819277312"
     ,"Tw 1246461901669838848"
     ,"Tw 1254441448327479299"
     ,"Tw 1254441448327479299 (Edit)"
     ,"Tw 1319946903711338496"
     ,"Tw 1343283697840226307"
     ,"Tw 1374139774269857798"
     ,"Tw 1374517800048291847"
     ,"Tw 1395040511795372038"
     ,"Tw 1395519538008141835"
     ,"Tw 1395878538297892865"
     ,"Tw 1452318302768963589"
     ,"Tw 1452599226882535431"
     ,"Tw 1452954849885163525"
     ,"Tw 1453520892374441986"
     ,"Tw 1454150378241548296"
     ,"Tw 1464534258173849611"
     -- ,"Tw 1467507942664646661" -- ChaosUGens.cpp/FBSineC
     -- ,"Tw 1479212835192332289" -- ChaosUGens.cpp/QuadC
     -- ,"Tw 1509888510525857792" -- ChaosUGens.cpp/LorenzN
     ,"Tw 1519791409921941507"
     ])
  ,("JAR", ["1-4Qx", "rk_20120422"])
  ,("JH", ["4157"])
  ,("JL", ["1 9", "1 Z", "Bitwise", "Dark Sea Horns", "Rain, Thunder"])
  ,("JMcC",
     ["Aleatoric Quartet"
     ,"Alien Froggies"
     ,"Alien Meadow"
     ,"Analogue Daze"
     ,"Analog Bubbles", "Analog Bubbles (Mouse)", "Analog Bubbles (Var)"
     ,"Babbling Brook"
     ,"Bach Prelude"
     ,"Berlin, 1977"
     ,"Bidirectional Strummable Guitar"
     ,"Birdies"
     ,"Blips 001"
     ,"Bounce"
     ,"Bouncing Objects"
     ,"Bowed String", "Bowed String (Texture)"
     ,"Choip Choip Choip"
     ,"Cf String"
     ,"Clipped Inharmonic Warbulence"
     ,"Clustered Sines"
     ,"Contamination Zone"
     ,"Coolant", "Coolant (Texture)"
     ,"Cymbalism Accellerando"
     ,"Data Space"
     ,"Deep Trip", "Deep Trip (Texture)"
     ,"Demanding Studies"
     ,"Drag to keyboard"
     ,"Fast LFOs with Slow Beats"
     ,"Hard-Sync Sawtooth with LFO"
     ,"Harmonic Cloud"
     ,"Harmonic Swimming"
     ,"Harmonic Tumbling"
     ,"Harmonic Zither"
     ,"Hell Is Busy"
     ,"Impulse Sequencer"
     ,"Inharmonic Warbulence"
     ,"Landon Rose"
     ,"Lfo Modulation"
     ,"Modal Space", "Modal Space (Partial)"
     ,"Moto Rev"
     ,"Narrow Band Filtered Crackle Noise", "Narrow Band Filtered Crackle Noise (Texture)"
     ,"Noise Burst Sweep"
     ,"Noise Modulated Sines"
     ,"Ostinoodles"
     ,"Pentatonic Pipes"
     ,"Phase Modulation with Slow Beats"
     ,"Plucked Strings"
     ,"Police State"
     ,"Pond Life", "Pond Life (Texture)"
     ,"Pulse Harmonic Warbulence"
     ,"Pulsing Bottles"
     ,"Random Panning Sines"
     ,"Random Pulsations"
     ,"Random Sine Waves"
     ,"Repeating Harmonic Klank"
     ,"Repeating Inharmonic Klank"
     ,"Reso Pulse"
     ,"Resonant Dust"
     ,"Reverberated Sine Percussion"
     ,"Sample and Hold Liquidities"
     ,"Saucer Base"
     ,"Sawed Cymbals"
     ,"Scratchy"
     ,"Sidereal Time"
     ,"Spe"
     ,"Sprinkler", "Sprinkler (Mouse)"
     ,"Strummable Metals"
     ,"Strummable Silk"
     ,"Sweepy Noise"
     ,"Swept Resonant Noise"
     ,"Synthetic Piano"
     ,"Tank"
     ,"Tarmac"
     ,"Theremin"
     ,"Tremulate", "Tremulate (Event)"
     ,"Trinkets"
     ,"Uplink" ,"Uplink (Texture)"
     ,"What Was I Thinking?"
     ,"Why SuperCollider?"
     ,"Wind Metals", "Wind Metals (Variables)"
     ,"Wuxia"
     ,"Zizle"
     ])
  ,("JR", ["A Bath", "Deepsea", "(Stereo) Half Life", "Sturmian Sequencer I", "Sturmian Sequencer II", "Sturmian Sequencer III"])
  ,("KL", ["Vibraphone"])
  ,("LJP"
   , ["OL 01", "OL 02", "OL 03", "OL 04", "OL 05", "OL 06", "OL 06(a)", "OL 06(b)", "OL 07(a)", "OL 07(b)", "OL 07(c)", "OL 07(d)", "OL 07(e)", "OL 08", "OL 09"
     ,"OL 10" ,"OL 11", "OL 12(a)", "OL 12(b)",  "OL 12(c)", "OL 12(d)", "OL 12(e)", "OL 13(a)", "OL 13(b)", "OL 13(c)", "OL 13(d)", "OL 13(e)"
     ,"OL 14(a)", "OL 14(e)", "OL 15", "OL 16(a)", "OL 16(d)"
     ,"One Line"])
  ,("MM", ["Tw 11"])
  ,("NC", ["SC Tutorial"])
  ,("NH", ["Phase Vocoder"])
  ,("NV"
    ,["Tw 2013-12-04", "Tw 2013-12-04 (TimesRepeat)"
     ,"TW 2014-06-03"
     ,"Tw 01","Tw 04","Tw 18"
     ,"Tw 40","Tw 41"
     ,"Tw 528187147543511041"])
  ,("OR", ["Gong"])
  ,("PJ"
   ,["Forest Sounds"])
  ,("RD", ["Oscillator Cluster"])
  ,("TM", ["Drummer","Tw 463992770596577280"])
  ,("TW"
   ,["Tw 01", "Tw 02", "Tw 03"])
  ,("ZS", ["Phase Distortion", "Toshiya"])
  ]

blk_graphs_names :: [String]
blk_graphs_names = concatMap (\(au, gr) -> map (blk_au_graph_filename au) gr) blk_graphs

blk_help_option :: String -> String -> String
blk_help_option = printf "<option value='%s'>%s</option>"

blk_in_autogen :: String -> [String] -> [String]
blk_in_autogen typ lst =
  concat [["<!-- AUTOGEN -->"
          ,"<option value=''>--" ++ typ ++ "--</option>"]
         ,lst
         ,["<!-- END AUTOGEN -->"]]

blk_help :: [String]
blk_help =
  ["ADSR.1", "ADSR.2"
  ,"ASR.1", "ASR.2"
  ,"ArrayFill.1"
  ,"Balance2.1", "Balance2.2"
  ,"Blip.1", "Blip.2"
  ,"Cc.1"
  ,"CombC.1", "CombC.2"
  ,"Comment.1"
  ,"DWGPluckedStiff.1"
  ,"DX7.1"
  ,"Decay2.1","Decay2.2"
  ,"DegreeToKey.1"
  ,"ExpRand.1"
  -- ,"FBSineC.1"
  ,"Formant.1"
  ,"Formlet.1"
  ,"Freezer.1"
  ,"FreqShift.1"
  ,"Gendy1.1"
  ,"HenonC.1"
  ,"Impulse.1", "Impulse.2", "Impulse.3"
  ,"LFNoise0.1"
  ,"LFNoise1.1", "LFNoise1.2"
  ,"LFSaw.1", "LFSaw.2"
  ,"Lag.1"
  ,"Latch.1", "Latch.2"
  ,"Ln.1"
  ,"LocalBuf.1"
  ,"LocalIn.1"
  ,"LocalOut.1"
  ,"MouseX.1"
  ,"OverlapTexture.1"
  ,"Pitch.1"
  ,"PMOsc.1", "PMOsc.2", "PMOsc.3", "PMOsc.4"
  ,"Pan2.1"
  ,"Play.1"
  ,"Pluck.1", "Pluck.2"
  ,"Pulse.1"
  ,"PulseCount.1"
  -- ,"QuadC.1"
  ,"Ringz.1","Ringz.2"
  ,"RingzBank.1"
  ,"Saw.1"
  ,"Seq.1", "Seq.2"
  ,"SfRead.1", "SfRead.2"
  ,"ShufflerB.1"
  ,"SinOsc.1", "SinOsc.2", "SinOsc.3"
  ,"Stepper.1", "Stepper.2", "Stepper.3"
  ,"Sw.1", "Sw.2"
  ,"TChoose.1", "TChoose.2"
  ,"TGrains.1","TGrains.2"
  ,"TIRand.1"
  ,"TRand.1", "TRand.2"
  ,"TScramble.1","TScramble.2"
  ,"VarSaw.1"
  ,"VoiceWriter.1"
  ,"Voicer.1", "Voicer.2", "Voicer.3"
  ,"VOSIM.1", "VOSIM.2"
  ,"XFade2.1"
  ,"XLn.1"]

blk_guide :: [String]
blk_guide =
  ["1.x Block SuperCollider"
  ,"1.1 Workspace, Synthesiser"
  ,"1.x Toolbox"
  ,"1.2 Guide, Help, Graphs"
  ,"1.x Load, Copy, Translate"
  ,"1.x User Programs"
  ,"1.3 Comment, SinOsc, Play"
  ,"1.4 Arrays, Variables, Binary Operators"
  ,"1.x Operators"
  ,"1.x Array Inputs, Array Expansion"
  ,"1.x Lambda, Duplicate"
  ,"1.x Overlap Texture"
  ,"1.5 Noise Generators, Filters, Control Signals"
  ,"1.x External Control, Mouse"
  ,"1.x External Control, Cc, Sw"
  ,"1.x External Control, Events"
  ,"1.x Block Names, Parameters, Messages"
  ,"1.x Names, Symbols, Unicode"
  ,"1.x Keyboard Shortcuts"
  ,"2.1 Multiply and Add"
  ,"2.x Authors, Initials"
  ,"2.x Code Generation, SuperCollider"
  ,"2.x Code Generation, Javascript"
  ,"2.x Code Generation, Smalltalk, Scheme"
  ,"2.x Code Generation, Macros"
  ,"3.x References"
  ]

gen_xml :: IO ()
gen_xml = do
  let rw nm fn = putStrLn nm >> stc_file_to_xml_file (fn ++ ".stc")
      rw_graph nm = rw nm nm
      rw_help nm = rw nm ("../ugen/" ++ nm)
      rw_guide nm = rw nm ("../guide/" ++ filename_rewriter id nm)
  mapM_ rw_graph blk_graphs_names
  mapM_ rw_help blk_help
  mapM_ rw_guide blk_guide

main :: IO ()
main = do
  gen_xml
  let dir = "/home/rohan/sw/blksc3/html/"
      mk_menu fn typ dat = writeFile (dir ++ fn ++ "-menu.html") (unlines (blk_in_autogen typ dat))
  mk_menu "help" "Help" (zipWith blk_help_option blk_help blk_help)
  mk_menu "guide" "Guide" (zipWith blk_help_option (map (filename_rewriter id) blk_guide) blk_guide)
  mk_menu "program" "Program" (concatMap (\(au, gr) -> map (blk_au_graph_option au) gr) blk_graphs)

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
rw "SinOsc(440, 0).abs"
rw "{ Rand(0, 1) }"
rw "{ arg tr; TRand(0, 1, tr) }"
rw "{ Rand(0, 1) }.dup"
rw "{ Rand(0, 1) }.dup(5)"
rw "1.to(9)"
rw "[1, 2, 3].collect({ arg i; i * i })"

-}
