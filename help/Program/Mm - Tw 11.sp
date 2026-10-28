/* Sc-140 ; #11 ; Micromoog */
let f = hasher(
	latch(
		sinOsc([1 .. 4] ! 2, 0),
		impulse([5 / 2, 5], 0)
	)
) * 300 + 300;
let z = varSaw(
	f.round(60),
	0,
	lfNoise2(2) / 3 + 0.5
) / 5;
z.transpose.sum
