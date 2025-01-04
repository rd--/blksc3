/* Noise slurps ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #11 */
SinOsc(
	0,
	Bpf(
		{ WhiteNoise() } ! 2 * 1000,
		{ LfNoise1(0.1) } ! 2 * 2000 + 4000,
		0.001
	)
) * 0.1
