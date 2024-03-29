{- swept resonant noise (jmcc) #2 ; graph rewrite -}
OverlapTexture({ :tr |
	var p = 10;
	var n = WhiteNoise() * 0.007;
	var m = SinOsc(0.1 + TRand(0, 0.2, tr), 0) * (12 + TRand(0, 12, tr)) + (60 + TRand(-24, 24, tr));
	var sweep = Resonz(n, m.MidiCps, 0.1);
	{ RingzBank(sweep, { 80 + TRand(0, 10000, tr) } ! p, [1], { 0.5 + TRand(0, 2, tr) } ! p) } ! 2
}, 4, 4, 5) * 0.25
