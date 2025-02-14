/* Jmcc - Why Supercollider? ; #0 */
let s = {
	Resonz(Dust(0.2) * 50,  Rand(200, 3200), 0.003)
} !+ 10;
let x = {
	CombL(
		DelayC(s, 0.048, 0.048),
		0.1,
		LfNoise1(Rand(0, 0.1)) * 0.04 + 0.05,
		15
	)
} !+ 7;
4.timesRepeat {
	x := AllpassN(x, 0.050, { Rand(0, 0.050) } ! 2, 1)
};
s + (x * 0.2)
