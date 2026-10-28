/* F0 ; Tw 0164 */
let cm = combC(
	inFb(1, [1 0]),
	5,
	[4.8 4.7],
	1
);
let fr = Pitch(
	cm,
	440,
	60,
	4000,
	100,
	16,
	1,
	0.01,
	0.5,
	1,
	0
).transpose.first - 4;
let ph = sinOsc(fr, 0) * 2.pi * sinOsc(1 / 16, 0);
let o = sinOsc([1 2], ph);
leakDc(o, 0.995) / 2 / 2 / 2 / 2
