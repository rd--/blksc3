/* https://soundcloud.com/soundaspureform/harmonic-cloud-1 Jmcc ; Rough guess */
let n = 36;
{ :tr |
	{
		let f = TExpRand(64, 4000, tr).RoundTo(64);
		Lpf(
			Saw({ TRand(-1, 1, tr) } ! 2 + f),
			TRand(1, 6, tr) * f
		) * 0.04
	} !+ n
}.OverlapTexture(0.4, 1, 2).Sum
