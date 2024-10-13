{- Blip.3 -}
{ :tr |
	Pan2(
		Blip(
			TExpRand(111, 333, tr),
			TRand(7, 11, tr)
		) * TRand(0.1, 0.5, tr)
		,
		0,
		0.1
	)
}.OverlapTexture(1, 4, 7).Sum
