{- LfNoise0.1 -}
{
	var x = MouseX(Rand(0.1, 5), Rand(3, 20), 0, 0.2);
	var y = MouseY(10, 50, 0, 0.2);
	EqPan2(
		SinOsc(SinOsc(x, 0) * y + Rand(200, 5000), 0),
		Rand(-1, 1)
	) * LfNoise0(MouseX(Rand(1, 6), Rand(1, 6), 0, 0.2)).Max(0) * 0.05
} !+ 12

{- ---- notes.md ---- -}
# LfNoise0

Pretty, nice, but inessential,
courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
