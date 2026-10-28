/* https://twitter.com/redFrik/status/1197185125819277312 */
let f = [2, 2.2];
let e = f / 22;
let g = 2 << 2;
let c = rhpf(
	combC(sinOsc(e, 0) / 2 * localIn(2, 0), 2, 2, g),
	[22, 2] * 222,
	e * 2
);
let o = sinOsc(
	2.2 ^ toggleFf(lfPulse(2, [2.2, 2], e)) * 22 * 2.22,
	lag(toggleFf(c - e), 0.1) * g
) * lfPulse(2, f, 0.5);
let d = (
	rlpf(
		o,
		g ^ sinOsc(e / 2 / 2, 0) * 2222 / 2,
		sinOsc(e, 0) + 2 / 2.pi
	) + c
).splay2.tanh;
(d * 0.25) <! localOut(d)
