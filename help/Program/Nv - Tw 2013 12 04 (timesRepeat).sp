/* Nv - Tw 2013 12 04 ; https://twitter.com/headcube/status/408145586970324992 (nv) */
let i = 1;
let s = 0;
9.timesRepeat {
	let a = saw(1 / i + 1 / 6);
	let d = 1 / i / (3 - lfPulse(1 / i, 0, 0.5));
	let p = pluck(a, a, 1, d / 30, 9, 0.9 / i);
	let x = 0.5 ^ i * p;
	let o = sinOsc(2, 0) + [4, 9];
	i := i + 1;
	s := s + combC(x, 1, o * 0.001, 0) - x
};
s / 9 / 9
