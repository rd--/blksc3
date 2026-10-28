/* Noise slurps ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #11 */
sinOsc(
	0,
	bpf(
		{ whiteNoise() } ! 2 * 1000,
		{ lfNoise1(0.1) } ! 2 * 2000 + 4000,
		0.001
	)
) * 0.1
