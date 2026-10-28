/* Sine slurps ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #10 */
sinOsc(
	0,
	bpf(
		{ dust(10) } ! 2 * 20000,
		{ lfNoise1(10) } ! 2 * 4000 + 4000,
		0.1
	)
) * 0.2
