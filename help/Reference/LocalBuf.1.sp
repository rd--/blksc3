/* localBuf ; https://sccode.org/1-5fx */
let t = (
	{ rand(-0.08, 0.08) } ! 1024
).localBuf;
let e = sinOsc(
	0.5 * lfNoise1(10) * 0.2 + 1,
	0
) * 0.1 + 1.05;
pan2(
	rhpf(
		lpf(osc(t, 0.05, 0), 400),
		500,
		0.76
	),
	0,
	e
)
