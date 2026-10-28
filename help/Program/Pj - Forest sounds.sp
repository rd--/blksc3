/* Forest sounds (Pj) */
{
	bpf(
		brownNoise(),
		sinOsc(
			lfNoise2(50) * 50 + 50,
			0
		) * 100 + 2000,
		0.001
	) * 10
} ! 2
