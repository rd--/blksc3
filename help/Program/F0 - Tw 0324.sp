/* https://sccode.org/1-4Qy ; F0 ; 0324 */
let c = [1, 3, 5, 6];
let f = duty(
	c + 1 / 16,
	0,
	dseq(
		Infinity,
		lfTri(1 / c / 8, 0) > 0 * 3 + c * 99
	)
);
hpf(
	bLowPass(lfTri(c, 0), f, 0.001) / 12,
	9
).splay2.sin / 2
