/* https://twitter.com/redFrik/status/1138498427241861122 (f0) */
let f = 9.sqrt;
let b = [f, 9.999];
let d = SinOscFb(b / 99, 0).Max(0);
let t1 = Select2(
	(
		SinOscFb(SinOscFb(9 / 999, 0), 0)
		>
		SinOscFb(9 / 99, 0)
	),
	f,
	9 / b
);
let t2 = Select2(
	(
		SinOscFb(9 / 99, 0)
		<
		SinOscFb(99 / 9999, 0)
	),
	b / 9,
	f
);
let f1 = Lag(9.9 * b * t1 * t2, 0.1);
let s1 = SinOscFb(f1, d) * SinOscFb(b / 9, 0) * d;
let c = PitchShift(s1, 9 / b, 9 / b.sqrt, b / 999, b / 99);
let s2 = GVerb(c * d * d * d, 99, 9, 9 / 999, 0.5, 15, 1, 0.7, 0.5, 300);
let s3 = s2 / 9 + PitchShift(c, f / 9, f / 9, 0, 0);
Hpf(s3.Splay2, 9).transposed.Sum * 0.5
