(* repeating harmonic klank (jmcc) *)
var p = 8;
var f = [400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1500, 1600];
OverlapTexture({ :tr |
	{
		RingzBank(
			Decay(Dust(0.8) * 0.01, 3.4) * LfSaw(TRand(0, 40, tr), 0),
			{ TChoose(tr, f) * TRand(1, 13, tr) }.dup(p),
			[1],
			{ TRand(0.4, 3.4, tr) }.dup(p)
		)
	}.dup(2)
}, 8, 2, 4)
