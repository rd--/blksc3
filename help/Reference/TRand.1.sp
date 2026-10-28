/* tRand.1.sl */
let t = impulse(7, 0) * sinOsc(331, 0);
let e = decay2(
	t,
	{ tRand(0.01, 0.05, t) } ! 2,
	{ tRand(0.05, 0.15, t) } ! 2
);
rlpf(
	lfSaw(
		tRand(321, 333, t),
		0
	),
	(lfNoise1(2) * 4 + 100).midiCps,
	1
) * e
