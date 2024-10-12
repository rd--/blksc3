{- analog bubbles (jmcc) #1 -}
let o = LfSaw([8, 7.23], 0) * 3 + 80;
let f = LfSaw(0.4, 0) * 24 + o;
let s = SinOsc(f.MidiCps, 0) * 0.04;
CombC(s, 0.2, 0.2, 4) * 0.1
