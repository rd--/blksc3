/* Hell is busy (Jmcc) #1 ; Graph rewrite */
{ :t |
	Pan2(
		SinOsc(
			TRand(400, 2400, t),
			0
		),
		TRand(-1, 1, t),
		LfPulse(
			TRand(1, 11, t),
			0,
			TRand(0, 0.7, t)
		) * 0.04
	)
}.OverlapTexture(4, 4, 8).Sum
