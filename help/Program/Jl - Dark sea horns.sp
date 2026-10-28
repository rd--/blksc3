/* Dark sea horns (Jl) */
let x = localIn(2, 0);
let a = (
	sinOsc(
		65,
		x * lfNoise1(0.1) * 3
	) * lfNoise1(3) * 6
).tanh;
9.timesRepeat {
	a := allpassL(
		a,
		0.3,
		{ rand(0, 0.2) + 0.1 } ! 2,
		5
	)
};
a := a.tanh;
(a * 0.1) <! localOut(a)
