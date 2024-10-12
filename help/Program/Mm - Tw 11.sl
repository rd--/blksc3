{- Sc-140 ; #11 ; Micromoog -}
let f = Hasher(
	Latch(
		SinOsc([1 .. 4] ! 2, 0),
		Impulse([5 / 2, 5], 0)
	)
) * 300 + 300;
let z = VarSaw(
	f.RoundTo(60),
	0,
	LfNoise2(2) / 3 + 0.5
) / 5;
z.transposed.sum
