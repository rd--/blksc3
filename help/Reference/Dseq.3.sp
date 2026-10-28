/* dseq.3 */
let t = impulse(6, 0);
let f = { :x |
	demand(t, 0, dseq(Infinity, x))
};
let m = [60 62 63 58 48 55].f;
let n = [63 60 48 62 55 58].f;
let o = lfSaw([m n].midiCps, 0) * 0.016;
combC(
	decay(t, 1.66) * o,
	0.166, 0.166,
	lfNoise2(0.166) * 1.66 + 1.66
) + o
