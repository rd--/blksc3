/* https://twitter.com/redFrik/status/1125557217086857216 */
let scl = [0 2.94 4.98 7.02 9.96];
let b = -7:6 + 0.7 * 2 / 666;
let m = degreeToKey(
	scl.localBuf,
	lfTri(b, b) * lfTri(b, 0) * 9 + 9 % 32,
	12
) + 24;
let o = varSaw(
	m.midiCps,
	0,
	lfTri(b, 0) + 1 / 2
) * ampComp(m, 440, 1 / 3) * lfTri(b, b) * b * 9;
let s = rlpf(o, lag2(m, 1 / b % 1) * 3, 1);
allpassC(s, 0.3, 0.2 - b, 3).splay2.tanh
