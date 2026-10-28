/* http://sccode.org/1-V (Nv) L1 */
let a = { pinkNoise() } ! 2;
let o = {
	let f = linExp(
		lfNoise1(rand(0, 0.05)),
		-1, 1,
		40, 15000
	);
	a := bBandStop(a, f, expRand(0.1, 2))
};
50.timesRepeat(o/0);
lpf(a, 100000)
