/* clipped inharmonic warbulence ; jmcc */
let z = { :tr |
	let r = linExp(lfNoise1(1 / 16), -1, 1, 0.1, 20);
	let f = tRand(24, 96, tr).midiCps;
	let a = (500 / f).min(1);
	let n = 12;
	a * (1 .. n).collect { :i |
		let g = tRand(0, n, tr) + 1;
		let o = (sinOsc(f * g, 0) * (sinOsc(r * tRand(0.9, 1.1, tr), tRand(0, 2.pi, tr)) * 0.08 - 0.04).max(0)).max(0);
		pan2(o, tRand(-1, 1, tr), 2 / g)
	}.sum
}.overlapTexture(12.8, 6.4, 6).mix;
z := leakDc(z, 0.995);
{ combC(z, 0.3, { rand(0.1, 0.3) } ! 2, 20) } !+ 8 * 0.2
