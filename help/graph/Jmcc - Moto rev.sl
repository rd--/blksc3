{- moto rev (jmcc) #1 -}
var f = SinOsc(0.2, 0) * 10 + 21;
var s = LFPulse(f, [0, 0.1], 0.1);
RLPF(s, 100, 0.1).Clip2(0.4)
