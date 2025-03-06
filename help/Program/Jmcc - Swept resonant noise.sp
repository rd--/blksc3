/* Swept resonant noise (Jmcc) #2 ; Graph rewrite */
{ :tr |
	let p = 10;
	let n = WhiteNoise() * 0.007;
	let m = MulAdd(
		SinOsc(0.1 + TRand(0, 0.2, tr), 0),
		12 + TRand(0, 12, tr),
		60 + TRand(-24, 24, tr)
	);
	let sweep = Resonz(n, m.MidiCps, 0.1);
	{
		RingzBank(
			sweep,
			{ 80 + TRand(0, 10000, tr) } ! p,
			nil,
			{ 0.5 + TRand(0, 2, tr) } ! p
		)
	} ! 2
}.OverlapTexture(4, 4, 5).Mix * 0.25
