/* Jmcc ; http://www.iamas.ac.jp/~aka/dspss2004/materials/ */
let freq = 80;
let trig = impulse(4, 0) * 0.05;
let f = lag(
	freq * latch((whiteNoise() * 3 + 3).round(0.5) + 1, trig),
	0.03
);
let z = (
	varSaw(
		f * [1, 1.004, 1.505, 1.499],
		0,
		mouseY(0, 1, 0, 0.2)
	) * decay2(trig, 0.005, 1.4)
).clump(2).sum;
combC(z * 0.5, 0.375, 0.375, 4).softClip
