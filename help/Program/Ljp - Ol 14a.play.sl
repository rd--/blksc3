/* Short-loops ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #14a */
Pan2(
	SinOsc(
		Lpf(
			Stepper(
				Impulse(80, 0),
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
