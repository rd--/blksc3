// http://sccode.org/1-4Qx (jar)
var f = LFPar(9.1, 0) * 100 + ([2, 3, 4, 5] * 100);
var g = LFPar(9, 0) * 1 + (LFPar(1 / [2, 3, 5, 7], 0) * 0.5);
var h = LFPar(0.5, 0) * 0.4 + 0.5;
var s = LFPar(f, 0) * Lag(g > h, 0.1);
s.splay * 0.075

