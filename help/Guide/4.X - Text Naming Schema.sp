/* 4.X - Text Naming Schema */
SinOsc(
	Latch(
		WhiteNoise() * 0.5 + 0.5,
		Impulse([2 1 0.2 0.142], 0)
	) * 220 + 110,
	0
).Splay * 0.1

# Annotation

The _N_ button selects between alternate naming schemas.
In the _Text Naming Schema_ the input names are elided,
emphasing the expression tree nature of the drawings.
