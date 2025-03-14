/* 4.X - Overlap Texture */
{ :t |
	Pan2(
		SinOsc(
			TRand(33, 3333, t),
			0
		) * 0.33,
		LfNoise1(0.11),
		LfNoise1(0.77) * 0.1 + 0.1
	)
}.OverlapTexture(2, 8, 12).Mix

# Annotation

ᨏλ𝑡 is another idiom, in this case combining three blocks.
ᨏ constructs a texture by overlapping multiple copies of a generating function λ,
which is reset at each cycle boundary by 𝑡.
