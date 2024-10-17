/* Ringz.2.sl */
{ :tr |
	var exciter = WhiteNoise() * 0.001;
	{
		Ringz(
			exciter,
			TxLine(TExpRand(100, 5000, tr), TExpRand(100, 5000, tr), 20, tr),
			0.5
		)
	} !^ 10
}.OverlapTexture(5, 10, 3)

/* ---- notes.md ---- */
# Ringz

Texture of parallel filters with linear frequency ramps.

