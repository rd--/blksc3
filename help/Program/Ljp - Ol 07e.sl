/* FM curio ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #7e */
SinOsc(
	0,
	SinOsc(
		9005,
		0
	) * (
		{ LfNoise2(1) } ! 2 * 100 + 101
	)
) * 0.1
