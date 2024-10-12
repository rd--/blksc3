{- Wind metals (Jmcc) ; Graph rewrite -}
OverlapTexture({ :tr |
	let n = 6;
	RingzBank(
		(
			{ BrownNoise() } ! 2 * 0.007
			*
			(
				LfNoise1(TExpRand(0.125, 0.5, tr)) * 0.75 + 0.25
			).Max(0)
		),
		{
			TRand(0, TRand(500, 8000, tr), tr)
			+
			TExpRand(60, 4000, tr)
		} ! n,
		[1],
		{ TRand(0.1, 2, tr) } ! n * 0.1
	).SoftClip
}, 5, 2, 12).Sum * 0.1
