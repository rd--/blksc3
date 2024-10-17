/* Nostalgic sci-fi music ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #2 */
CombC(
	SinOsc(
		LfNoise2(
			[1, 1, 1, 1] * 0.1
		) * 440 + ([1, 2] * 440),
		0
	).Sum * 0.01,
	0.2,
	[0.13, 0.2],
	15
)
