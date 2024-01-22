{- https://twitter.com/redFrik/status/1452599226882535431 f0 -}
var e = LFSaw(0.1, 0);
var b = #[1, 2, 3, 4] / 2;
var f = #[0, 1];
var d = LinExp(LFSaw(11, f), -1, 1, 2 ** LFSaw(0.061, f) * 4 - 1, 2 ** LFSaw(0.031, f) * 20 - 8);
var x = LFSaw(LFSaw(0.001, b).roundTo(LFSaw(0.071, 0) > 0 / 8) * 5, 0);
var y = LinExp(x, -1, 1, Latch(2 ** LFSaw(0.041, f) * 120 - 59, e), Latch(2 ** LFSaw(0.051, 0) * 500, e));
var o = Blip(y, d) / d.max(1);
HPF(o.splay, 9)
