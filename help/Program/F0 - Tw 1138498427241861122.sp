/* https://twitter.com/redFrik/status/1138498427241861122 (f0) */
let f = 9.sqrt;
let b = [f, 9.999];
let d = sinOscFb(b / 99, 0).max(0);
let t1 = select2(
	(
		sinOscFb(sinOscFb(9 / 999, 0), 0)
		>
		sinOscFb(9 / 99, 0)
	),
	f,
	9 / b
);
let t2 = select2(
	(
		sinOscFb(9 / 99, 0)
		<
		sinOscFb(99 / 9999, 0)
	),
	b / 9,
	f
);
let f1 = lag(9.9 * b * t1 * t2, 0.1);
let s1 = sinOscFb(f1, d) * sinOscFb(b / 9, 0) * d;
let c = pitchShift(s1, 9 / b, 9 / b.sqrt, b / 999, b / 99);
let s2 = gVerb(c * d * d * d, 99, 9, 9 / 999, 0.5, 15, 1, 0.7, 0.5, 300);
let s3 = s2 / 9 + pitchShift(c, f / 9, f / 9, 0, 0);
hpf(s3.splay2, 9).transpose.sum * 0.5
