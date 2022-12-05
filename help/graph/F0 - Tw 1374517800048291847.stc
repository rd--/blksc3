// f0 ; https://twitter.com/redFrik/status/1374517800048291847
var b = 1.to(9);
var f0 = Lag(VarSaw(0.003, b / 9, 0.5).roundTo(1 / 3), 1.9) * 91 + 252;
var w0 = VarSaw(b / 9 / 99, 0, 0.5) % 1;
var f1 = 63 * b + VarSaw(0.49, b / 9, 0.5);
var f2 = VarSaw(b / 9 / 9, 0, b / 10) / 99 + f0 * b;
var w1 = VarSaw(f2, 0, b / 9) + 1 / 2;
var m1 = VarSaw(6, b / 9 / 3, 0).max(VarSaw(0.2, b / 9, 0.5) / 9 + (VarSaw(0.009, 0, 0.5) * 0.3 + 0.4));
var o2 = VarSaw(f1, 0, w1) * m1 + (VarSaw(60, 0, 0.5) * VarSaw(3, 0, 0).max(0) ** 3);
(VarSaw(f0, b / 9, w0) / 3 + o2 / 5).Splay2
