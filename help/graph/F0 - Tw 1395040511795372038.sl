(* f0 ; https://twitter.com/redFrik/status/1395040511795372038 *)
var b = [2, 6, 3, 1];
var c = 500;
var f = DmdFor(b, SinOscFb(b / 9, 0), Seq(inf, (SinOscFb(b / 24, 0).rounded + 0.to(9) * 7 + 29.17).midiCps));
var o = SinOscFb(f, SinOscFb(b / 13, 0).max(0) / 3 * 2);
var p = AllpassC(o/8, 1, 0.51, 8);
var q = Bpf(Hasher(SinOscFb(b / 12, 0).max(0)) * SinOscFb(b / c, 0).max(0) / c, 2 ** SinOscFb(b / c * 2, 0) * 1000, 1 / 99);
Hpf(p + GVerb(q, 99, 9, 0.2, 0.5, 15, 1, 0.7, 0.5, 300), 50).clump(2).sum.transpose.sum * 0.2
