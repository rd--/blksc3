/* 4.X - Translation */
{ :t |
	{
		Ringz(
			OnePole(
				BrownNoise() * 0.002,
				0.95
			),
			TRand(0, 2000, t) + 40,
			1
		)
	} !^ 10
}.XFadeTexture(4, 4)

# Annotation

...
