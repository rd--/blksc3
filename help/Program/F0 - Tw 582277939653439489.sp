/* http://twitter.com/redFrik/status/582277939653439489 */
let b = [0.999 .. 9];
hpf(
	moogFf(
		lfSaw(50 * b, 0) - (blip(lfSaw(b, 0) + 9, b * 99) * 9),
		lfSaw(b / 8, 0) + 1 * 999,
		lfSaw(b / 9, 0) + 1 * 2,
		0
	),
	9
).splay / 3
