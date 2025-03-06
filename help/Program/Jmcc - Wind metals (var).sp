/* Wind metals (Jmcc) ; graph rewrite */
OverlapTexture({ :tr |
	let n = 6;
	let exc = { BrownNoise() } ! 2 * 0.007 * (LfNoise1(TExpRand(0.125, 0.5, tr)) * 0.75 + 0.25).Max(0);
	let f = { TRand(0, TRand(500, 8000, tr), tr) + TExpRand(60, 4000, tr) } ! n;
	let dt = { TRand(0.1, 2, tr) } ! n;
	let s = RingzBank(exc, f, [1], dt) * 0.1;
	s.SoftClip
}, 5, 2, 12).Mix * 0.1
