/* https://soundcloud.com/soundaspureform/harmonic-cloud-1 Jmcc ; Rough guess */
let n = 36;
{ :tr |
	{
		let f = tExpRand(64, 4000, tr).round(64);
		lpf(
			saw({ tRand(-1, 1, tr) } ! 2 + f),
			tRand(1, 6, tr) * f
		) * 0.04
	} !+ n
}.overlapTexture(0.4, 1, 2).sum
