/* F0 - Tw 0350 ; https://sccode.org/1-4Qy */
let b = [9 .. 1; -1] / 99;
let o = lfSaw(
	lfSaw(b, b) + 1 * 99,
	b
) * (
	lfSaw(lfSaw(b, 0) > b, 0) > 0.9
);
splay2(
	combN(
		gVerb(o, 99, 1, b * 9, b, 15, 1, 0.7, 0.5, 300) / 19,
		1,
		b / 9.9,
		9
	) * 0.9
).transpose.sum
