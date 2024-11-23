/* Coolant (Jmcc) */
let o = OnePole(BrownNoise() * 0.002, 0.95);
OverlapTexture({ :tr |
	{
		Ringz(o, TRand(40, 2040, tr), 1) * 0.2
	} !^ 10
}, 6, 6, 3).Mix

# Notes

This is a similar graph to the _(texture)_ graph, but drawn differently.
