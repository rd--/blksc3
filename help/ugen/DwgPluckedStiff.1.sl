(* DwgPluckedStiff.1 *)
var t = TDuty(Dseq(inf, [1 1 2 1 1 1 2 3 1 1 1 1 2 3 4] * 0.175), 0, 1);
var freq = [
	Demand(t, 0, Dseq(inf, [60 62 63 58 48 55])),
	Demand(t, 0, Dseq(inf, [63 60 48 62 55 58]))
].MidiCps;
var amp = TRand(0.05, 0.65, t); (* pulse amplitude (0  - 1, def = 0.5) *)
var gate = 1; (* synth release *)
var pos = TRand(0.05, 0.25, t); (* pluck position (0 - 1, def = 0.14) *)
var c1 = 1 / TRand(0.25, 1.75, t); (* reciprocal of decay time (def = 1.0) *)
var c3 = TRand(10, 1400, t); (* high frequency loss factor (def = 30) *)
var inp = amp * LfClipNoise(2000) * Decay2(t, 0.001, TRand(0.05, 0.150, t)) * LfClipNoise(2000); (* pluck signal *)
var release = TRand(0.05, 0.15, t); (* release time (seconds, def = 0.1) *)
var fB = TRand(1, 4, t); (* inharmonicity factor (def = 2.0) *)
var ps = DwgPluckedStiff(freq, amp, gate, pos, c1, c3, inp, release, fB);
Pan2(ps, TRand(-1, 1, t), 0.1).sum
