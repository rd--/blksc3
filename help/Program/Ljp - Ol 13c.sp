/* trills ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #13c */
let p = [0.5 1 2];
pan2(
	sinOsc(
		1000 * lag(
			(lfSaw(p * 0.4, 0) / p).round(1 / 8),
			0.002
		).sum,
		0
	),
	0,
	0.2
)
