/* Trills ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #13d */
let p = [1, 2] + 0.04;
Pan2(
	SinOsc(
		Lag(
			RoundTo(
				LfTri(p * 0.2, 0) / p,
				1 / 8
			),
			0.002
		).Sum * 1400,
		0
	),
	0,
	0.2
)
