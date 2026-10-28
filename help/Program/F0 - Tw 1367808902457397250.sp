/* F0 <https://twitter.com/redFrik/status/1367808902457397250> ; requires=VarLag */
let rat = [76.11 76.11 64 57.02 38.05 85.43 32 114.04 42.71 47.95 95.89];
(1 .. 10).collect { :i |
	let f0 = rat[i] * (sinOsc(1 / 16, 0) > 0 * 2 + 6 - (sinOsc(sinOsc(1 / 32, i), 0) / 20));
	let z = sinOsc(f0, 0) / 9;
	let x = varLag((sinOsc(1 / 64, 0) * 6 + 6).floor, 0.1, 0);
	let y = varLag(sinOsc(sinOsc(1 / 4, i.pi / 11) < 0 * 2, 0) * 0.1, 0.01, sinOsc(0.01, i));
	let dly = i + x % 11 / 33 + 0.1 + y;
	let dcy = sinOsc(1 / 9, 0) + 1;
	combC(z, 0.5, dly, dcy)
}.splay2.tanh
