{- analog bubbles (jmcc) #1 -}
var o = LfSaw([8, 7.23], 0) * 3 + 80;
var f = LfSaw(0.4, 0) * 24 + o;
var s = SinOsc(f.MidiCps, 0) * 0.04;
CombC(s, 0.2, 0.2, 4) * 0.1
