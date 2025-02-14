/* https://twitter.com/redFrik/status/1197185125819277312 */
let f = [2, 2.2];
let e = f / 22;
let g = 2 << 2;
let c = Rhpf(
	CombC(SinOsc(e, 0) / 2 * LocalIn(2, 0), 2, 2, g),
	[22, 2] * 222,
	e * 2
);
let o = SinOsc(
	2.2 ^ ToggleFf(LfPulse(2, [2.2, 2], e)) * 22 * 2.22,
	Lag(ToggleFf(c - e), 0.1) * g
) * LfPulse(2, f, 0.5);
let d = (
	Rlpf(
		o,
		g ^ SinOsc(e / 2 / 2, 0) * 2222 / 2,
		SinOsc(e, 0) + 2 / 2.pi
	) + c
).Splay2.Tanh;
(d * 0.25) <! LocalOut(d)
