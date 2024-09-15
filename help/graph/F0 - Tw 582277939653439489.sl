{- http://twitter.com/redFrik/status/582277939653439489 -}
let b = [0.999 .. 9];
Hpf(
	MoogFf(
		LfSaw(50 * b, 0) - (Blip(LfSaw(b, 0) + 9, b * 99) * 9),
		LfSaw(b / 8, 0) + 1 * 999,
		LfSaw(b / 9, 0) + 1 * 2,
		0
	),
	9
).Splay / 3
