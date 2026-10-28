/* Wind metals (Jmcc) ; graph rewrite */
overlapTexture({ :tr |
	let n = 6;
	let exc = { brownNoise() } ! 2 * 0.007 * (lfNoise1(tExpRand(0.125, 0.5, tr)) * 0.75 + 0.25).max(0);
	let f = { tRand(0, tRand(500, 8000, tr), tr) + tExpRand(60, 4000, tr) } ! n;
	let dt = { tRand(0.1, 2, tr) } ! n;
	let s = ringzBank(exc, f, [1], dt) * 0.1;
	s.SoftClip
}, 5, 2, 12).mix * 0.1
