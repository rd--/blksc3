/* Analog bubbles (Jmcc) #1 */
combC(
	sinOsc(
		midiCps(
			lfSaw(
				0.4,
				0
			)
			* 24
			+ (
				lfSaw(
					[8 7.23],
					0
				)
				* 3
				+ 80
			)
		),
		0
	) * 0.04,
	0.2,
	0.2,
	4
) * 0.1
