/* XFade2.1.sl */
EqPan2(
	XFade2(
		Saw(440),
		SinOsc(440, 0),
		LfTri(0.1, 0),
		0.1
	),
	LfNoise2(0.25)
)

# XFade2

Cross fade between two signals.
