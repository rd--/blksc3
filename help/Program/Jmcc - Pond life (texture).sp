/* pond life (jmcc) #1 ; graph rewrite */
overlapTexture({ :tr |
	pan2(
		sinOsc(
			sinOsc(
				tRand(20, 50, tr),
				0
			)
			* tRand(100, 400, tr)
			+ tRand(500, 2500, tr),
			0
		),
		tRand(-1, 1, tr),
		lfPulse(
			3 / tRand(1, 9, tr),
			0,
			tRand(0.2, 0.5, tr)
		) * 0.04
	)
}, 8, 8, 4).mix
