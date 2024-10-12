{- DwgPluckedStiff.1 -}
let t = TDuty(
	Dseq(inf, [1 1 2 1 1 1 2 3 1 1 1 1 2 3 4] * 0.175),
	0,
	1
);
let freq = [
	Demand(t, 0, Dseq(inf, [60 62 63 58 48 55])),
	Demand(t, 0, Dseq(inf, [63 60 48 62 55 58]))
].MidiCps;
let amp = TRand(0.05, 0.65, t);
let gate = 1;
let pos = TRand(0.05, 0.25, t);
let c1 = 1 / TRand(0.25, 1.75, t);
let c3 = TRand(10, 1400, t);
let inp = [
	LfClipNoise(2000),
	Decay2(t, 0.001, TRand(0.05, 0.150, t)),
	LfClipNoise(2000),
	amp
].product;
let release = TRand(0.05, 0.15, t);
let fB = TRand(1, 4, t);
let ps = DwgPluckedStiff(freq, amp, gate, pos, c1, c3, inp, release, fB);
Pan2(ps, TRand(-1, 1, t), 0.1).sum
