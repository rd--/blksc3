/* http://sccode.org/1-4Qx (jar) */
let f = lfPar(9.1, 0) * 100 + ([2, 3, 4, 5] * 100);
let g = lfPar(9, 0) * 1 + (lfPar(1 / [2, 3, 5, 7], 0) * 0.5);
let h = lfPar(0.5, 0) * 0.4 + 0.5;
let s = lfPar(f, 0) * lag(g > h, 0.1);
s.splay * 0.075
