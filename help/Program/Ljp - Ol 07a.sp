/* FM curio ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #7a */
sinOsc(
	1,
	sinOsc(
		333,
		sinOsc(
			143,
			0
		) * (
			{ lfNoise2(0.2) } ! 2 * 100 + 110
		)
	)
) * 0.1
