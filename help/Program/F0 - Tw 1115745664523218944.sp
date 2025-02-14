/* https://twitter.com/redFrik/status/1115745664523218944 */
let b = [1, 2, 6, 3] + (SinOsc(0.0345, 0) < 0);
let c = 2 ^ SinOsc(b, 0);
let j = MulAdd(
	SinOsc(1 / b, 0),
	b / 3,
	b * (SinOsc(0.0234, 0) < 0 + 1)
).RoundTo(1);
let o = SinOsc(
	Duty(c, 0, Dseq(Infinity, 99 * j)),
	b
) * SinOsc(1.5 / c, 0).Max(
	SinOsc(0.0123, 0) * 0.5 - 0.5
);
let z = CombC(
	o,
	1,
	7 - b / 12 * (SinOsc(c < 0.6, 0) % 1 + 0.1),
	2 ^ (SinOsc(SinOsc(0.1, 0) * 0.1, b) * 9)
);
Hpf(z.Splay2, 9).Tanh * 0.2
