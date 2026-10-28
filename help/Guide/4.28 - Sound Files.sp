/* 4.X - Sound Files */
let [b] = sfAcquire('Floating', 1, [1]);
let t = mouseY(2, 200, 1, 0.2);
tGrains(
	2,
	impulse(t, 0),
	b,
	dseq(Infinity, [10 1 1 0.5 0.5 0.2 0.1]),
	mouseX(0, sfDuration([b]), 0, 0.2),
	4 / t,
	dseq(Infinity, [-1, 1]),
	0.1, 4
)

# Annotation

`SfAcquire` fetches a sound file,
specified either as a _Url_ or as a key into an extensible dictionary,
and answers a list of buffer numbers.
