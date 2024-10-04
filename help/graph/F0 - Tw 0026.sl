{- http://www.fredrikolofsson.com/f0blog/?q=node/537 ; graph rewrite (rd) -}
let n1 = [
	0 0 0 0 0 0 0 3 4 6 4 0 3 2 0 0
	0 0 1 6 0 1 0 0 0 0 0 0 4 0 0 3
];
let n2 = [
	1 1 2 0 0 3 3 0 0 3 4 0 1 3 0 0
	0 0 1 0 1 7 0 0 5 6 3 0 4 0 9 0
];
let n = n1 ++ n2;
let b = [0 2 4 5 7 9 11].asLocalBuf;
let t = Impulse(4, 0);
let m = DegreeToKey(
	b,
	Demand(t, 0, Dseq(inf, n)),
	12
);
let e = Decay2(
	t,
	TRand(0.05, 0.15, t),
	TRand(0.15, 0.5, t)
);
{
	CombC(
		(
			Blip(
				(48 + m + TRand(0, 0.05, t)).MidiCps,
				TRand(1, 7, t)
			) * e * 8
		).Tanh / 8,
		1,
		1,
		8
	) * TRand(0.05, 0.15, t)
} ! 2
