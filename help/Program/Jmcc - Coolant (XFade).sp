/* 4.X - Translation */
{ :t |
	{
		ringz(
			onePole(
				brownNoise() * 0.002,
				0.95
			),
			tRand(0, 2000, t) + 40,
			1
		)
	} !^ 10
}.xFadeTexture(4, 4)

# Notes

...
