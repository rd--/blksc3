;; spe (jmcc)
var t = Impulse(9, 0);
var s = [00, 03, 02, 07, 08, 32, 16, 18, 00, 12, 24, 32];
var f = (Demand(t, 0, Seq(inf, s)) + 32).midiCps;
var e = Decay2(t, 0.05, 1) * 0.1;
var z = Rlpf(LfSaw(f, 0) * e, (LfNoise1(1) * 36 + 110).midiCps, 0.1);
4.timesRepeat { z = AllpassC(z, 0.05, { Rand(0, 0.05) }.dup, 4) };
z * 0.25
