/* contamination zone ; jmcc #9 ; graph rewrite */
let z = { :tr |
	let f = tExpRand(800, 8000, tr);
	let s = pinkNoise() * (lfNoise1(tRand(0, 3, tr)) * 0.0008 + 0.0022);
	let r = ringzBank(s, { tRand(50, 2000, tr) } ! 4, [1], { tRand(0.2, 4, tr) } ! 4).Abs;
	pan2(
		rlpf(r, sinOsc(tRand(0, 1, tr), 0) * 0.7 * f + f, 0.1),
		lfNoise1(tRand(0, 1, tr)),
		lfPulse(tRand(0, 15, tr), 0, tRand(0.2, 0.4, tr))
	)
}.overlapTexture(8, 3, 4).mix;
6.timesRepeat {
	z := allpassC(z, 0.040, { rand(0, 0.04) } ! 2, 16)
};
z * 0.2
