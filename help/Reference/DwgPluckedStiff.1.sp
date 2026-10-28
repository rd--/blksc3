/* DwgPluckedStiff.1 */
let t = tDuty(
	dseq(Infinity, [1 1 2 1 1 1 2 3 1 1 1 1 2 3 4] * 0.175),
	0,
	1
);
let freq = [
	demand(t, 0, dseq(Infinity, [60 62 63 58 48 55])),
	demand(t, 0, dseq(Infinity, [63 60 48 62 55 58]))
].midiCps;
let amp = tRand(0.05, 0.65, t);
let gate = 1;
let pos = tRand(0.05, 0.25, t);
let c1 = 1 / tRand(0.25, 1.75, t);
let c3 = tRand(10, 1400, t);
let inp = [
	lfClipNoise(2000),
	decay2(t, 0.001, tRand(0.05, 0.150, t)),
	lfClipNoise(2000),
	amp
].product;
let release = tRand(0.05, 0.15, t);
let fB = tRand(1, 4, t);
let ps = DwgPluckedStiff(freq, amp, gate, pos, c1, c3, inp, release, fB);
pan2(ps, tRand(-1, 1, t), 0.1).sum
