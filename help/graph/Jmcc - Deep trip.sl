{- deep trip (jmcc) #9 ; texture=overlap,12,4,4,inf -}
var f = (LfNoise1(Rand(0, 0.3)) * 60 + 70).MidiCps;
var a = LfNoise2(f * Rand(0, 0.5)) * (LfNoise1(Rand(0, 8)) * SinOsc(Rand(0, 40), 0) * 0.1).max(0);
var s = Pan2(SinOsc(f, 0) *  a, LfNoise1(Rand(0, 5)), 1);
var c = { CombC(s, 0.5, { Rand(0, 0.2) + 0.3 }.dup, 20) };
s + c.dup.sum
