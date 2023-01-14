;; TRand.1
var t = Impulse(7, 0) * SinOsc(331, 0);
var e = Decay2(t, { TRand(0.01, 0.05, t) } ! 2, { TRand(0.05, 0.15, t) } ! 2);
Rlpf(LfSaw(TRand(321, 333, t), 0), (LfNoise1(2) * 4 + 100).MidiCps, 1) * e
