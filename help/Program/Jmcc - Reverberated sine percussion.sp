/* Reverberated sine percussion (Jmcc) #3 */
let d = 5;
let s = {
	resonz(
		dust(2 / d) * 50,
		200 + rand(0, 3000),
		0.003
	)
} !+ d;
let z = delayC(s, 0.048, 0.048);
let y = combC(
	z,
	0.1,
	lfNoise1({ rand(0, 0.1) } ! 5) * 0.04 + 0.05,
	15
);
let x = y.sum;
4.timesRepeat {
	x := allpassC(x, 0.050, { rand(0, 0.05) } ! 2, 1)
};
s + (0.2 * x)
