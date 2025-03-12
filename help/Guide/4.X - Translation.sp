/* 4.X - Translation */
{
	Bpf(
		BrownNoise(),
		SinOsc(
			LfNoise2(50) * 50 + 50,
			0
		) * 100 + 2000,
		0.001
	) * 10
} ! 2

# Annotation

There is also a translator from Sᴘʟ programs to block drawings.
At left is a translation of the following program from the _sc-users_ mailing list,
posted by Paul Jones on 2007-04-06.
