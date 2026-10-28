/* Inverted saw ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #4 */
eqPan2(
	saw(
		lfNoise1(1) * 1000 + 1200
	) * sinOsc(
		sampleRate() / 2,
		1
	),
	0
) * 0.3
