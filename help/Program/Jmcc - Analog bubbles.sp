/* Analog bubbles (Jmcc) #1 */
CombC(
	SinOsc(
		MidiCps(
			LfSaw(
				0.4,
				0
			)
			* 24
			+ (
				LfSaw(
					[8, 7.23],
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
