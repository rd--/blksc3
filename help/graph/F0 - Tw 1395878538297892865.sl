(* f0 ; https://twitter.com/redFrik/status/1395878538297892865 *)
var t = Impulse(5, 0);
var g = #[3, 2];
var e = LagUD(t, 0.001, SinOscFB(g / 99, 0) + 1.08);
var m = #[24, 0, 3, 5, 7, 10, 36].collect({arg i; i + #[36, 48, 36, 33, 60, 72]}).concatenation;
var o = SinOscFB(Demand(t, 0, Seq(inf, m.midiCps) / g), SinOscFB(0.02, 0)) * e;
var c = RLPF(o, 3 ** SinOscFB(0.04, 0) + e * 2000, 3 ** SinOscFB(g / 9, 0) / 3) * 4;
(CombC(c.tanh, 1, 1 / 2, 4) + CombC(c, 1, 1 / 3, 5) / 8 + c).tanh * 0.1
