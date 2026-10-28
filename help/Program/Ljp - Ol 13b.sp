/* Trills ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #13b */
let p = [1, 2] + 0.01;
pan2(
	sinOsc(
		lag(
			round(
				lfSaw(p * 0.4, 0) / p,
				1 / 6
			),
			0.002
		).sum * 1000,
		0
	),
	0,
	0.2
)
