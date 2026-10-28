/* Random panning sines (Jmcc) #4 */
{ :tr |
	let n = 8;
	{
		eqPan2(
			sinOsc(
				80 + tRand(0, 2000, tr),
				0
			),
			lfNoise1(
				0.4 + tRand(0, 0.8, tr)
			)
		) * (
			lfNoise1(
				0.4 + tRand(0, 0.8, tr)
			) * 0.4 + 0.5
		)
	} !+ n * 0.1 / n
}.overlapTexture(8, 8, 2).mix
