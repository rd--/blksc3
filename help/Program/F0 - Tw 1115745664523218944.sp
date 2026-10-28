/* https://twitter.com/redFrik/status/1115745664523218944 */
let b = [1, 2, 6, 3] + (sinOsc(0.0345, 0) < 0);
let c = 2 ^ sinOsc(b, 0);
let j = mulAdd(
	sinOsc(1 / b, 0),
	b / 3,
	b * (sinOsc(0.0234, 0) < 0 + 1)
).round(1);
let o = sinOsc(
	duty(c, 0, dseq(Infinity, 99 * j)),
	b
) * sinOsc(1.5 / c, 0).max(
	sinOsc(0.0123, 0) * 0.5 - 0.5
);
let z = combC(
	o,
	1,
	7 - b / 12 * (sinOsc(c < 0.6, 0) % 1 + 0.1),
	2 ^ (sinOsc(sinOsc(0.1, 0) * 0.1, b) * 9)
);
hpf(z.splay2, 9).tanh * 0.2
