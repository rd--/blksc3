/* Hell is busy (Jmcc) #1 ; Graph rewrite */
{ :t |
	pan2(
		sinOsc(
			tRand(400, 2400, t),
			0
		),
		tRand(-1, 1, t),
		lfPulse(
			tRand(1, 11, t),
			0,
			tRand(0, 0.7, t)
		) * 0.04
	)
}.overlapTexture(4, 4, 8).sum
