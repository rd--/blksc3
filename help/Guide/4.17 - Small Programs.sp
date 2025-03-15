/* 4.X - Small Programs */
let a = [0.02 0.1 1 2 3 4];
SinOsc(
	Latch(
		LfPar(a + 0.5, 0).Sum,
		Impulse(a, 0)
	) * 100 + 300,
	0
).Splay * 0.1

# Annotation

The system includes translations of a few hundred small programs,
listed in the _Program_ menu.
These include SuperCollider example programs by James McCartney,
a set of 140-character _haiku_ programs by Fredrik Olofsson,
a set of one-line programs by Lance Putnam,
and this program by Dan Stowell.

