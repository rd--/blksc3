/* Analog bubbles (Jmcc) #1 ; controls */
CombC(
	SinOsc(
		MidiCps(
			LfSaw(
				NamedControl('freq1', 0.4),
				0
			)
			* NamedControl('mul1', 24)
			+ (
				LfSaw(
					[
						NamedControl('freq2', 8),
						NamedControl('freq3', 7.23)
					],
					0
				)
				* NamedControl('mul2', 3)
				+ NamedControl('add1', 80)
			)
		),
		0
	) * 0.04,
	0.2,
	0.2,
	NamedControl('time1', 4)
) * NamedControl('mul3', 0.1)
