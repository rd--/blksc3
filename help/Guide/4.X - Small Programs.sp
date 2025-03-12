/* 4.X - Small Programs */
let a = [0.02 0.1 1 2 3 4];
SinOsc(
	Latch(
		LfPar(a + 0.5, 0).Sum,
		Impulse(a, 0)
	) * 100 + 300,
	0
).Splay * 0.2

# Annotation

The system includes translations of a few hundred small programs,
which can be loaded using the _Program_ menu.

These include various SuperCollider example programs by James McCartney,
a collection of 140-character _haiku_ programs by Fredrik Olofsson,
and the program below by Dan Stowell.

