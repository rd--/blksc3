{- https://sccode.org/1-4Qy ; f0 ; 0230 -}
let b = (1 .. 9) / 16;
let e = Ringz(LfSaw(b, 0), b * 999, 1.25);
let d = 1 / (b * 999) * (LfTri(b / 120, b * 2) % 1);
CombC(PinkNoise() * e, 1, d, 3).Splay / 99
