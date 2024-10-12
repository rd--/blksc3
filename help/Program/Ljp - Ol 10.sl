{- Sine slurps ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #10 -}
SinOsc(
	0,
	Bpf(
		{ Dust(10) } ! 2 * 20000,
		{ LfNoise1(10) } ! 2 * 4000 + 4000,
		0.1
	)
) * 0.2
