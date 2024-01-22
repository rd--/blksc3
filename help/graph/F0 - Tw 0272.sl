{- https://sccode.org/1-4Qy ; f0 ; 0272 -}
let b = (3 .. 8) * (SinOsc(0.05, 0).RoundTo(1) / 4 + 1);
let c = SinOsc(1.1 / b, 0);
let o = SinOsc(TwoPole(SinOsc(2 ^ b, 0) > c, b * 99, c % 0.5 + 0.5), 0) / 2;
Hpf(o.Splay, 9)
