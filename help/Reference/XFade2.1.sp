/* xFade2.1.sl */
eqPan2(
	xFade2(
		saw(440),
		sinOsc(440, 0),
		lfTri(0.1, 0),
		0.1
	),
	lfNoise2(0.25)
)

# xFade2

Cross fade between two signals.
