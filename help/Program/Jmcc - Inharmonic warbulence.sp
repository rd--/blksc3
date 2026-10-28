/* Jmcc ; inharmonic warbulence ; Graph rewrite */
let z = { :tr |
	let f = tRand(24, 96, tr).midiCps;
	let a = (500 / f).min(1);
	let r = txLine(tExpRand(0.1, 20, tr), tExpRand(0.1, 20, tr), 25.6, tr);
	let n = 12;
	(1 .. n).collect { :i |
		let g = tRand(0, n, tr) + 1;
		let m = sinOsc(r * tRand(0.9, 1.1, tr), tRand(0, 2.pi, tr)) * 0.08 - 0.04;
		eqPan2(sinOsc(f * g, 0), tRand(-1, 1, tr)) * m.max(0) * 2 / g
	}.sum * 0.25
}.overlapTexture(12.8, 6.4, 6).mix;
{
	combN(z, 0.3, { rand(0.1, 0.3) } ! 2, 8)
} !+ 5 / 2
