{- f0 <https://twitter.com/redFrik/status/1343283697840226307> -}
var b = 2.to(12) / 12;
var f = [136.1, 163.3, 181.4, 204.1, 244.9, 272.1, 326.5, 362.8, 408.2, 489.8, 544.2];
var z = { WhiteNoise() }.dup(11) * (LFTri(b, 0) + 1 / 2) + BrownNoise();
var t = LFTri(121 ** LFTri(2 / 121 * b, 0), 0);
var d = Lag2(LFTri(1 / 212.1, 0) <= (1 / 212), 2 / b) / 12 * 1.2 + 1.2 / f;
var c = LFTri(b / 12, 0) + 1 / 2;
var p = Pluck(z, t, 2 / 121, d, 1 / 2 * 12 / 1.2, c);
HPF(p, 12).splay / 2.1 / 2
