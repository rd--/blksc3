/* F0 ; Tw 0165 */
let i = leakDc(
	inFb(1, [1, 0]),
	0.995
);
let s = limiter(i, 1, 0.01);
let dt = lfTri(1 / [6, 8], 0) * 0.4 + 0.5;
combC(
	bLowPass(s, 2000, 1) + impulse(0, 0),
	1,
	dt,
	1
) * 0.99
