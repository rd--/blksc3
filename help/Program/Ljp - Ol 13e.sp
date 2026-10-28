/* Trills ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #13e */
let p = [1 4] + 0.01;
pan2(
	sinOsc(
		lag(
			round(
				lfTri(p * 0.2, 0) / p,
				1 / 8
			),
			0.002
		).sum * 1400,
		0
	),
	0,
	0.2
)
