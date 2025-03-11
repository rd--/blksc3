/* 4.X - Naming Schemas */
let e = LfGauss(4, 1 / 8, 0, 1, 0) * 0.25;
let z = FreqShift(
	Blip(60, 4) * e + LocalIn(2, 0),
	LfNoise0(1 / 4) * 90,
	0
);
z <! LocalOut(DelayC(z, 1, 0.1) * 0.9)

# Annotation

The text displayed on a block is called the block message.
It is distinct from the block type,
and is not stored as part of the program.

The _N_ button selects between alternate naming schemas.
Ordinarily the _Symbolic Naming Schema_ is selected.
There is also a _Text Naming Schema_.
