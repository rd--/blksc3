/* Vosim.3.sl */
overlapTexture({ :tr |
	{
		Vosim(
			impulse(110 + tRand(-1, 1, tr), 0),
			tExpRand(110, 880, tr),
			tChoose(tr, [3, 5, 7]),
			tChoose(tr, [0.77, 0.88, 0.99])
		)
	} ! 2
}, 3, 5, 3).mix * 0.1
