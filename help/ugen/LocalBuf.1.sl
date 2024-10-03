{- LocalBuf ; https://sccode.org/1-5fx -}
let t = (
	{ Rand(-0.08, 0.08) } ! 1024
).asLocalBuf;
let e = SinOsc(
	0.5 * LfNoise1(10) * 0.2 + 1,
	0
) * 0.1 + 1.05;
Pan2(
	Rhpf(
		Lpf(Osc(t, 0.05, 0), 400),
		500,
		0.76
	),
	0,
	e
)
