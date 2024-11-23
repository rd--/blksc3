/* FM curio ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #7d */
SinOsc(
	2,
	SinOsc(
		6003,
		0
	) * (
		{ LfNoise2(1) } ! 2 * 200 + 201
	)
) * 0.1
