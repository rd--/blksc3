/* a bath (jr) */
let above = mouseY(0, 2, 0, 0.2).round(1);
let aside = mouseX(1, 1.6, 0, 0.2);
let sources = [
	{ whiteNoise() } ! 2 * 0.3,
	{ pinkNoise() } ! 2,
	lfdNoise3(10000) * 0.1
];
let u1 = selectX(linLin(lfdNoise1(4), -1, 1, 0, sources.size), sources) * 0.1;
let u2 = u1 + delayC(u1, 0.1, [0.001, 0.0012]) * 0.1;
let u3 = { rlpf(u2, { rand(100.0, 340) * aside } ! 4, 0.2).sum } ! 2;
let u4 = combC(u3.reverse, 0.05, 0.05, 0.3) * 0.3 * lfNoise2(0.2).max(0) + u3;
selectX(above.lag(0.4), [u2, u4]) * 2

# Notes

Mouse control.
