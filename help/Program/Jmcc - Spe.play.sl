/* Spe (Jmcc) */
let t = Impulse(9, 0);
let s = [00, 03, 02, 07, 08, 32, 16, 18, 00, 12, 24, 32];
let f = (Demand(t, 0, Dseq(inf, s)) + 32).MidiCps;
let e = Decay2(t, 0.05, 1) * 0.1;
let z = Rlpf(
	LfSaw(f, 0) * e,
	(LfNoise1(1) * 36 + 110).MidiCps,
	0.1
);
4.timesRepeat {
	z := AllpassC(z, 0.05, { Rand(0, 0.05) } ! 2, 4)
};
z * 0.25
