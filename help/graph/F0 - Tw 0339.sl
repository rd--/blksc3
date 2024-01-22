{- https://sccode.org/1-4Qy ; f0 ; 0339 -}
let b = 1 / (1 .. 12);
let f1 = 2 ^ LfSaw(b, 0).RoundTo(LfSaw(8, b) < 0 / 4 + 1);
let f2 = 4 ^ LfSaw(b / 12, 0) + 2;
let f3 = 3 ^ LfSaw(b / 4, 0) * 3;
Formant(f1 * 99, f2 * 99, f3 * 99).Splay.Tanh / 2
