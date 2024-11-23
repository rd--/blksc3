/* trills ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #13c */
let p = [0.5 1 2];
Pan2(
	SinOsc(
		1000 * Lag(
			(LfSaw(p * 0.4, 0) / p).RoundTo(1 / 8),
			0.002
		).Sum,
		0
	),
	0,
	0.2
)
