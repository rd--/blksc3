/* repeating harmonic klank (jmcc) */
let p = 8;
let f = [400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1500, 1600];
overlapTexture({ :tr |
	{
		ringzBank(
			decay(dust(0.8) * 0.01, 3.4) * lfSaw(tRand(0, 40, tr), 0),
			{ tChoose(tr, f) * tRand(1, 13, tr) }.duplicate(p),
			[1],
			{ tRand(0.4, 3.4, tr) }.duplicate(p)
		)
	}.duplicate(2)
}, 8, 2, 4).sum
