/* FM curio ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #7d */
sinOsc(
	2,
	sinOsc(
		6003,
		0
	) * (
		{ lfNoise2(1) * 200 + 201 } ! 2
	)
) * 0.1
