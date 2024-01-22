{- <https://twitter.com/redFrik/status/1452318302768963589> ; f0 -}
var b = 2 * pi * [4, 3, 1, 2, 5] / 5;
var m = 2 ** SinOsc(1 / 50, b) * 99;
var c = m.roundTo(50);
var t = b / (2 * pi) + SinOsc(b / 50, SinOsc(SinOsc(1 / 99, pi).max(0), 0) ** (2 * pi)).max(0);
var f = SinOsc(b / 9, b) / 3 + c;
var h = CombC(c / 50, 2, t, 5);
var a = 50 / m * SinOsc(b / 50, 0).max(0) + 0.5;
var z = Blip(f, h) * a;
var o = HPF(z.splay * 1.5, 15).tanh;
o + GVerb(o.sum / 2 * Ln(0, 1, 1), 50, 3, 0.5, 0.5, 15, 1, 0.7, 0.5, 300) / 5
