{- Ljp - Ol 15 -}
EqPan2(
	CombC(
		LfSaw([0.49, 1, 1.51, 1.89] * 200,  0) *  0.1,
		1,
		Clip(Rlpf(LfNoise2(0.1) *  0.4 + 0.6,  10,  1.1), 0.21, 1),  15).sum,
	0
)

{- ---- notes.md ---- -}
<https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html> No.15
(Saw scratching)
