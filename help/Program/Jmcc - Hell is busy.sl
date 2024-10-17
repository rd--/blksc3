/* Hell is busy (Jmcc) #1 ; Graph rewrite */
{ :tr |
	let e = LfPulse(
		TRand(1, 11, tr),
		0,
		TRand(0, 0.7, tr)
	) * 0.04;
	Pan2(
		SinOsc(TRand(400, 2400, tr), 0),
		TRand(-1, 1, tr),
		e
	)
}.OverlapTexture(4, 4, 8).Sum
