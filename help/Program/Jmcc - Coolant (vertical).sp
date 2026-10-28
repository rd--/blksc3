/* Coolant (Jmcc) */
let o = onePole(brownNoise() * 0.002, 0.95);
overlapTexture({ :tr |
	{
		ringz(o, tRand(40, 2040, tr), 1) * 0.2
	} !^ 10
}, 6, 6, 3).mix

# Notes

This is a similar graph to the _(texture)_ graph, but drawn differently.
