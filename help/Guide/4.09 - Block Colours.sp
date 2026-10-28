/* 4.X - Block Colours */
let t = impulse(rand(0.5, 1) / [3 5 7 9], 0);
splay(
	hpf(
		pinkNoise() * decay2(t, 3, 27),
		tLine(300, [3 9 12 15] * 1000, 3, t)
	) * tRand(0.05, 0.15, t)
)

# Notes

Blocks are drawn in colours according to category.
The colours are shown to the left of the category name.
Categories are grouped into families,
also indicated by colouring.

This program includes blocks from nine categories,
and they are drawn in nine colours.
