{- https://twitter.com/redFrik/status/454598285861617665 -}
var b = 1.to(9).reverse;
var c = LFTri(3 ** LFTri(1 / b, b / 9), 0);
var d = LFTri(1 / b, 0) % 1 / 9 + 0.01;
var f = 2 ** LFTri(b / 99, 0).rounded * 99 * b;
var o = GrainSin(2, c, d, f, 0, -1, 512);
o.tanh.splay / 2
