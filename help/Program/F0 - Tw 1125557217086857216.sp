/* https://twitter.com/redFrik/status/1125557217086857216 */
let scl = [0 2.94 4.98 7.02 9.96];
let b = -7:6 + 0.7 * 2 / 666;
let m = DegreeToKey(
	scl.asLocalBuf,
	LfTri(b, b) * LfTri(b, 0) * 9 + 9 % 32,
	12
) + 24;
let o = VarSaw(
	m.MidiCps,
	0,
	LfTri(b, 0) + 1 / 2
) * AmpComp(m, 440, 1 / 3) * LfTri(b, b) * b * 9;
let s = Rlpf(o, Lag2(m, 1 / b % 1) * 3, 1);
AllpassC(s, 0.3, 0.2 - b, 3).Splay2.Tanh
