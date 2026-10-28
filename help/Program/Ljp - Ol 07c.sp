/* FM curio ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #7c */
sinOsc(
	1,
	sinOsc(
		14003,
		0
	) * (
		{ lfNoise2(0.2) } ! 2 * 100 + 101
	)
) * 0.1
