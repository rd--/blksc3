/* Ljp - Ol 15 ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html */
eqPan2(
	combC(
		lfSaw(
			[0.49 1 1.51 1.89] * 200,
			0
		) * 0.1,
		1,
		clip(
			rlpf(
				lfNoise2(0.1) * 0.4 + 0.6,
				10,
				1.1
			),
			0.21,
			1
		),
		15
	).sum,
	0
)
