/* Wind metals (Jmcc) ; Graph rewrite */
overlapTexture({ :tr |
	let n = 6;
	ringzBank(
		(
			{ brownNoise() } ! 2 * 0.007
			*
			(
				lfNoise1(tExpRand(0.125, 0.5, tr)) * 0.75 + 0.25
			).max(0)
		),
		{
			tRand(0, tRand(500, 8000, tr), tr)
			+
			tExpRand(60, 4000, tr)
		} ! n,
		[1],
		{ tRand(0.1, 2, tr) } ! n * 0.1
	).SoftClip
}, 5, 2, 12).sum * 0.1
