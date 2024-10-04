{- https://twitter.com/redFrik/status/839296011982024704 -}
let t = LfSaw([0.5, 0.6], 0);
let f = LfSaw(5, 0) * LfSaw(0.015, 0) + 1 * 98;
let m = (2 ^ LfSaw(4, 0)).RoundTo(0.5) * 99;
let i = 2 ^ LfSaw(1 / [8, 9], 0) * 8;
let g = GrainFm(1, t, 16, f, m, i, 0, -1, 512);
(g / 2).Tanh * 0.25
