/* Ljp - Ol 12e ; Variation */
let p = { WhiteNoise() * 0.02 } ! 2;
p + CombC(
	p,
	0.1,
	LfNoise1(LfNoise2(5) * 15 + 30) * 0.08 + 0.08,
	-10000
)
