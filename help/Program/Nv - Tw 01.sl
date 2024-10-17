/* http://sccode.org/1-V (Nv) L1 */
let a = { PinkNoise() } ! 2;
let o = {
	let f = LinExp(LfNoise1(Rand(0, 0.05)), -1, 1, 40, 15000);
	a := BBandStop(a, f, ExpRand(0.1, 2))
};
50.timesRepeat(o:/0);
Lpf(a, 100000)
