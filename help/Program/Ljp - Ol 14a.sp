/* Short-loops ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #14a */
pan2(
	sinOsc(
		lpf(
			stepper(
				impulse(80, 0),
				0,
				1,
				512,
				84,
				0
			),
			1000
		) * 20,
		0
	),
	0,
	0.2
)
