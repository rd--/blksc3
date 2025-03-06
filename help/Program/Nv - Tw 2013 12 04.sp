/* Nv - Tw 2013 12 04 ; https://twitter.com/headcube/status/408145586970324992 */
let f = { :i |
	let a = Saw(1 / i + 1 / 6);
	let d = 1 / i / (3 - LfPulse(1 / i, 0, 0.5)) / 30;
	let p = Pluck(a, a, 1, d, 9, 0.9 / i);
	let x = 0.5 ^ i * p;
	let o = SinOsc(2, 0) + [4 9];
	CombC(x, 1, o * 0.001, 0) - x
};
1:9.collect(f:/1).Sum / 81
