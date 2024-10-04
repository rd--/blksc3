{- https://sccode.org/1-4Qy ; F0 ; 0324 -}
let c = [1, 3, 5, 6];
let f = Duty(
	c + 1 / 16,
	0,
	Dseq(
		inf,
		LfTri(1 / c / 8, 0) > 0 * 3 + c * 99
	)
);
Hpf(
	BLowPass(LfTri(c, 0), f, 0.001) / 12,
	9
).Splay2.Sin / 2
