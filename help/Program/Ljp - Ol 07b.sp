/* FM curio ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #7b */
sinOsc(
	1,
	sinOsc(
		33,
		sinOsc(
			1403,
			0
		) * (
			{ lfNoise2(0.2) } ! 2 * 10 + 11
		)
	) * 10
) * 0.1
