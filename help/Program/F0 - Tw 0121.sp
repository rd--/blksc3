/* F0 - Tw 0121 */
let z = sinOsc(
	1 / [8 7],
	0
) * sinOsc(1 / 30, 0) * 9;
let l = (0:7 * 6 + 56).localBuf;
let m = sinOsc(1 / [4 3], 0);
let o = sinOsc(
	bufRd(1, l, z, 0, 1).midiCps,
	0
) * m;
combN(o, 1, 1 / [6 5], 9).tanh * 0.1
