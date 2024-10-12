{- F0 ; Tw 0165 -}
let i = LeakDc(
	InFb(1, [1, 0]),
	0.995
);
let s = Limiter(i, 1, 0.01);
let dt = LfTri(1 / [6, 8], 0) * 0.4 + 0.5;
CombC(
	BLowPass(s, 2000, 1) + Impulse(0, 0),
	1,
	dt,
	1
) * 0.99
