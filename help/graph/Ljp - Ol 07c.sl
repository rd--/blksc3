{- FM curio ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #7c -}
SinOsc(
	1,
	SinOsc(
		14003,
		0
	) * (
		{ LfNoise2(0.2) } ! 2 * 100 + 101
	)
) * 0.1
