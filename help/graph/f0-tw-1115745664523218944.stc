// https://twitter.com/redFrik/status/1115745664523218944
var b = #[1, 2, 6, 3] + (SinOsc(0.0345, 0) < 0);
var c = 2 ** SinOsc(b, 0);
var j = MulAdd(SinOsc(1 / b, 0), b / 3, b * (SinOsc(0.0234, 0) < 0 + 1)).rounded;
var o = SinOsc(DmdFor(c, 0, Seq(inf, 99 * j)), b) * SinOsc(1.5 / c, 0).max(SinOsc(0.0123, 0) * 0.5 - 0.5);
var z = CombC(o, 1, 7 - b / 12 * (SinOsc(c < 0.6, 0) % 1 + 0.1), 2 ** (SinOsc(SinOsc(0.1, 0) * 0.1, b) * 9));
HPF(z.splay, 9).tanh * 0.2
