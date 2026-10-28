/* blip.2 */
{ :tr |
	pan2(
		blip(
			tExpRand(111, 333, tr),
			tRand(7, 11, tr)
		) * tRand(0.1, 0.5, tr)
		,
		0,
		0.1
	)
}.overlapTexture(1, 4, 7).sum
