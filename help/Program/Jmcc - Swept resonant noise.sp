/* Swept resonant noise (Jmcc) #2 ; Graph rewrite */
{ :tr |
	let p = 10;
	let n = whiteNoise() * 0.007;
	let m = sinOsc(0.1 + tRand(0, 0.2, tr), 0).*+(
		12 + tRand(0, 12, tr),
		60 + tRand(-24, 24, tr)
	);
	let sweep = resonz(n, m.midiCps, 0.1);
	{
		ringzBank(
			sweep,
			{ 80 + tRand(0, 10000, tr) } ! p,
			nil,
			{ 0.5 + tRand(0, 2, tr) } ! p
		)
	} ! 2
}.overlapTexture(4, 4, 5).mix * 0.25
