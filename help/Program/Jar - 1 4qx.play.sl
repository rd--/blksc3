/* http://sccode.org/1-4Qx (jar) */
let f = LfPar(9.1, 0) * 100 + ([2, 3, 4, 5] * 100);
let g = LfPar(9, 0) * 1 + (LfPar(1 / [2, 3, 5, 7], 0) * 0.5);
let h = LfPar(0.5, 0) * 0.4 + 0.5;
let s = LfPar(f, 0) * Lag(g > h, 0.1);
s.Splay * 0.075
