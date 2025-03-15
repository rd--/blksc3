/* 4.X - Sound Files */
let [b] = SfAcquire('Floating', 1, [1]);
let t = MouseY(2, 200, 1, 0.2);
TGrains(
	2,
	Impulse(t, 0),
	b,
	Dseq(Infinity, [10 1 1 0.5 0.5 0.2 0.1]),
	MouseX(0, SfDuration([b]), 0, 0.2),
	4 / t,
	Dseq(Infinity, [-1, 1]),
	0.1, 4
)

# Annotation

`SfAcquire` fetches a sound file,
specified either as a _Url_ or as a key into an extensible dictionary,
and answers a list of buffer numbers.
