/* https://twitter.com/redFrik/status/454598285861617665 */
let b = [9 .. 1; -1];
let c = lfTri(3 ^ lfTri(1 / b, b / 9), 0);
let d = lfTri(1 / b, 0) % 1 / 9 + 0.01;
let f = 2 ^ lfTri(b / 99, 0).round(1) * 99 * b;
let o = grainSin(2, c, d, f, 0, -1, 512);
o.tanh.splay2.transpose.mix / 2
