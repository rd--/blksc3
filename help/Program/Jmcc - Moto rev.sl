{- Moto rev (Jmcc) #1 -}
let f = SinOsc(0.2, 0) * 10 + 21;
let s = LfPulse(f, [0, 0.1], 0.1);
Rlpf(s, 100, 0.1).Clip2(0.4)
