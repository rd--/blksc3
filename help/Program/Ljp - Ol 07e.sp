/* FM curio ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #7e */
sinOsc(
	0,
	sinOsc(
		9005,
		0
	) * (
		{ lfNoise2(1) } ! 2 * 100 + 101
	)
) * 0.1
