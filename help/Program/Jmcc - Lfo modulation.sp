/* Lfo modulation (Jmcc) #1 */
combC(
	rlpf(
		lfPulse(
			sinOsc(0.05, 0) * 80 + 160,
			0,
			0.4
		) * 0.05,
		sinOsc(
			[0.6 0.7],
			0
		) * 3600 + 4000,
		0.2
	),
	0.3,
	[0.2 0.25],
	2
)
