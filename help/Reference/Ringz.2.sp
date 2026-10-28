/* ringz.2.sl */
{ :tr |
	var exciter = whiteNoise() * 0.001;
	{
		ringz(
			exciter,
			txLine(tExpRand(100, 5000, tr), tExpRand(100, 5000, tr), 20, tr),
			0.5
		)
	} !^ 10
}.overlapTexture(5, 10, 3)

# ringz

Texture of parallel filters with linear frequency ramps.

