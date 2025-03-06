/* Random panning sines (Jmcc) #4 */
{ :tr |
	let n = 8;
	{
		EqPan2(
			SinOsc(
				80 + TRand(0, 2000, tr),
				0
			),
			LfNoise1(
				0.4 + TRand(0, 0.8, tr)
			)
		) * (
			LfNoise1(
				0.4 + TRand(0, 0.8, tr)
			) * 0.4 + 0.5
		)
	} !+ n * 0.1 / n
}.OverlapTexture(8, 8, 2).Mix
