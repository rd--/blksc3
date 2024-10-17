/* Forest sounds (Pj) */
{
	Bpf(
		BrownNoise(),
		SinOsc(LfNoise2(50) * 50 + 50, 0) * 100 + 2000,
		0.001
	) * 10
} ! 2
