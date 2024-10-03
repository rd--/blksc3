{- One line (Ljp) -}
let lfs = LfSaw([1, 0.99], [0, 0.6]) * 2000 + 2000;
let sft = lfs.truncateTo([400, 600]) * [1, -1];
Pan2(
	SinOsc(OnePole(sft.sum, 0.98), 0),
	0,
	0.05
)
