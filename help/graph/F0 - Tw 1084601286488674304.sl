{- https://twitter.com/redFrik/status/1084601286488a674304 -}
let b = [2, 5, 1, 6, 3];
let x = PitchShift(LocalIn(2, 0), 1.5, 0.5, 0, 0);
let y = VarSaw(
	LfSaw(1 / b, 0) > 0 / 4 + 1.25 ^ b * 99,
	0,
	LfSaw(b / 9, 0) % 1
);
let z = Hpf(
	LfSaw(LfSaw(1 / b, 0).RoundTo(1) + (1 / 2), 0) > 0,
	LfSaw(b / 33, 0) * 4 + 8
);
let d = MoogFf(
	(y * z).Splay2,
	LfSaw(1 / 9, 0) + 2 * 4000,
	2,
	0
);
d <! LocalOut(d)
