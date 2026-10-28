/* f0 ; https://twitter.com/redFrik/status/1374517800048291847 */
let b = 1.to(9);
let f0 = lag(varSaw(0.003, b / 9, 0.5).round(1 / 3), 1.9) * 91 + 252;
let w0 = varSaw(b / 9 / 99, 0, 0.5) % 1;
let f1 = 63 * b + varSaw(0.49, b / 9, 0.5);
let f2 = varSaw(b / 9 / 9, 0, b / 10) / 99 + f0 * b;
let w1 = varSaw(f2, 0, b / 9) + 1 / 2;
let m1 = varSaw(6, b / 9 / 3, 0).max(varSaw(0.2, b / 9, 0.5) / 9 + (varSaw(0.009, 0, 0.5) * 0.3 + 0.4));
let o2 = varSaw(f1, 0, w1) * m1 + (varSaw(60, 0, 0.5) * varSaw(3, 0, 0).max(0) ^ 3);
(varSaw(f0, b / 9, w0) / 3 + o2 / 5).splay2
