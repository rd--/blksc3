/* https://sccode.org/1-4Qy ; F0 ; 0239 */
let b = 0.11 / (1 .. 6);
let q = [
	032 035 083 117 112 101 114 067
	111 108 108 105 100 101 114 032
].midiCps;
let o = lfTri(duty(b, 0, dseq(Infinity, q)), 0);
splay2(
	combC(
		o,
		4,
		lfTri(b / 9, 0) % lfTri(b, 0) * 4 % 4,
		5
	) / 6
).tanh
