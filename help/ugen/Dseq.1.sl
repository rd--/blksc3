{- Dseq.1 -}
let tr = Impulse(6, 0);
let n0 = Demand(
	tr,
	0,
	Dseq(inf, [60 62 63 58 48 55])
);
let n1 = Demand(
	tr,
	0,
	Dseq(inf, [63 60 48 62 55 58])
);
LfSaw([n0, n1].MidiCps, 0) * 0.05
