/* FM curio ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #7b */
SinOsc(
	1,
	SinOsc(
		33,
		SinOsc(
			1403,
			0
		) * (
			{ LfNoise2(0.2) } ! 2 * 10 + 11
		)
	) * 10
) * 0.1
