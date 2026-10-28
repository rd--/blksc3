/* Sprinkler (Jmcc) #1 */
bpz2(
	whiteNoise()
	*
	lfPulse(
		lfPulse(
			0.09,
			0,
			0.16
		) * 10 + 7,
		0,
		0.25
	) * 0.1
)
