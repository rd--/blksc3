/* 4.X - Overlap Texture */
{ :t |
	pan2(
		sinOsc(
			tRand(33, 3333, t),
			0
		) * 0.33,
		lfNoise1(0.11),
		lfNoise1(0.77) * 0.1 + 0.1
	)
}.overlapTexture(2, 8, 12).mix

# Notes

ᨏλ𝑡 is another idiom, in this case combining three blocks.
ᨏ constructs a texture by overlapping multiple copies of a generating function λ,
which is reset at each cycle boundary by 𝑡.
