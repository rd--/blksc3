/* Reverberated sine percussion (Jmcc) #3 */
let d = 5;
let s = {
	Resonz(
		Dust(2 / d) * 50,
		200 + Rand(0, 3000),
		0.003
	)
} !+ d;
let z = DelayC(s, 0.048, 0.048);
let y = CombC(
	z,
	0.1,
	LfNoise1({ Rand(0, 0.1) } ! 5) * 0.04 + 0.05,
	15
);
let x = y.sum;
4.timesRepeat {
	x := AllpassC(x, 0.050, { Rand(0, 0.05) } ! 2, 1)
};
s + (0.2 * x)
