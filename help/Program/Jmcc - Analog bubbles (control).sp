/* Analog bubbles (Jmcc) #1 ; controls */
combC(
	sinOsc(
		midiCps(
			lfSaw(
				namedControl('freq1', 0.4),
				0
			)
			* namedControl('mul1', 24)
			+ (
				lfSaw(
					[
						namedControl('freq2', 8),
						namedControl('freq3', 7.23)
					],
					0
				)
				* namedControl('mul2', 3)
				+ namedControl('add1', 80)
			)
		),
		0
	) * 0.04,
	0.2,
	0.2,
	namedControl('time1', 4)
) * namedControl('mul3', 0.1)
