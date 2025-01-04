/* FM curio ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #7a */
SinOsc(
	1,
	SinOsc(
		333,
		SinOsc(
			143,
			0
		) * (
			{ LfNoise2(0.2) } ! 2 * 100 + 110
		)
	)
) * 0.1
