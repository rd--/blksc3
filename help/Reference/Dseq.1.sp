/* dseq.1 */
let tr = impulse(6, 0);
let n0 = demand(
	tr,
	0,
	dseq(Infinity, [60 62 63 58 48 55])
);
let n1 = demand(
	tr,
	0,
	dseq(Infinity, [63 60 48 62 55 58])
);
lfSaw([n0, n1].midiCps, 0) * 0.05
