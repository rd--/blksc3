{- <https://twitter.com/redFrik/status/1453520892374441986> ; f0 -}
var b = [1, 2, 3] / 3;
var c = 2 * pi * b;
var t = SinOsc(10, pi * b);
var x = SinOsc(b, 0) > 0 * SinOsc(b * 50, 0) + 1 / 2 * (300 ** SinOsc(1 / 32, c) + 99) + (SinOsc(1 / 256, c).rounded * 50 + 99);
var f = Latch(x, t % SinOsc(99 ** SinOsc(1 / 64, 0), 0));
var y = SinOsc(SinOsc(1 / 16, 0) * 3 + 12, 0) + 1 / 2 * (SinOsc(1 / 8, c) * 50 + 51);
var h = Latch(y, t * SinOsc(1 / 4, 0));
var o = Blip(f, h).splay / 3;
o + GVerb(o.sum / 3 / 3, 30, 3, 0.5, 0.5, 15, 1, 0.7, 0.5, 300)
