/* https://twitter.com/redFrik/status/1084601286488a674304 */
let b = [2, 5, 1, 6, 3];
let x = pitchShift(localIn(2, 0), 1.5, 0.5, 0, 0);
let y = varSaw(
	lfSaw(1 / b, 0) > 0 / 4 + 1.25 ^ b * 99,
	0,
	lfSaw(b / 9, 0) % 1
);
let z = hpf(
	lfSaw(lfSaw(1 / b, 0).round(1) + (1 / 2), 0) > 0,
	lfSaw(b / 33, 0) * 4 + 8
);
let d = moogFf(
	(y * z).splay2,
	lfSaw(1 / 9, 0) + 2 * 4000,
	2,
	0
);
d <! localOut(d)
