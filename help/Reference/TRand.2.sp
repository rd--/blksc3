/* tRand.2.sl */
let tr = impulse([0.25, 0.75], 0);
sinOsc(
	lag(
		tRand(110, 440, tr),
		0.05
	),
	0
) * lag(
	tRand(0.01, 0.1, tr),
	0.05
)
