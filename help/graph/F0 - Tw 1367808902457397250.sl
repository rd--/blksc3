(* f0 <https://twitter.com/redFrik/status/1367808902457397250> *)
var rat = [76.11, 76.11, 64, 57.02, 38.05, 85.43, 32, 114.04, 42.71, 47.95, 95.89];
(1 .. 10).collect { :i |
	var f0 = rat[i] * (SinOsc(1 / 16, 0) > 0 * 2 + 6 - (SinOsc(SinOsc(1 / 32, i), 0) / 20));
	var z = SinOsc(f0, 0) / 9;
	var x = VarLag((SinOsc(1 / 64, 0) * 6 + 6).Floor, 0.1, 0);
	var y = VarLag(SinOsc(SinOsc(1 / 4, i / 11 * pi) < 0 * 2, 0) * 0.1, 0.01, SinOsc(0.01, i));
	var dly = i + x % 11 / 33 + 0.1 + y;
	var dcy = SinOsc(1 / 9, 0) + 1;
	CombC(z, 0.5, dly, dcy)
}.Splay2.Tanh

(* ---- notes.md ---- *)
_VarLag_
