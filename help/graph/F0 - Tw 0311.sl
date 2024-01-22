{- https://sccode.org/1-4Qy ; f0 ; 0311 -}
let f = SinOscFb(8, 0) + 3 << (SinOscFb(3 / 8, 0.9) * (SinOscFb(5, 0) + 1) + 4.2) * 9;
let o = SinOscFb(f, SinOscFb(1 / 32, 0) + SinOscFb(7.9, 1));
AllpassC(o, 2, SinOscFb([3, 2] / 999, 0) + 1, 4) / 2
