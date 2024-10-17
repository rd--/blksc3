/* clipped inharmonic warbulence ; jmcc */
let z = { :tr |
	let r = LinExp(LfNoise1(1 / 16), -1, 1, 0.1, 20);
	let f = TRand(24, 96, tr).MidiCps;
	let a = (500 / f).Min(1);
	let n = 12;
	a * (1 .. n).collect { :i |
		let g = TRand(0, n, tr) + 1;
		let o = (SinOsc(f * g, 0) * (SinOsc(r * TRand(0.9, 1.1, tr), TRand(0, 2 * pi, tr)) * 0.08 - 0.04).Max(0)).Max(0);
		Pan2(o, TRand(-1, 1, tr), 2 / g)
	}.sum
}.OverlapTexture(12.8, 6.4, 6).Mix;
z := LeakDc(z, 0.995);
{ CombC(z, 0.3, { Rand(0.1, 0.3) } ! 2, 20) } !+ 8 * 0.2
