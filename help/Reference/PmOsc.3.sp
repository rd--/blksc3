/* pmOsc.4 */
overlapTexture({ :tr |
	var pm = tLine(0, tRand(0, 12, tr), tRand(1, 12, tr), tr);
	linPan2(
		pmOsc(
			tRand(0, 2000, tr),
			tRand(0, 800, tr),
			pm,
			0
		),
		tRand(-1, 1, tr),
		0.05
	)
}, 1, 2, 7)

# pmOsc

Overlap-add texture of pmOsc signals with randomly selected linear ramps.
