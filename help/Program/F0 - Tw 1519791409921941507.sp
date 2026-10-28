/* http://twitter.com/redFrik/status/1519791409921941507 ; F0 */
let f = { :freq |
	sinOsc(freq, [0, 5])
};
let g = f(5);
let i = (f(1) * f(0.005) + 1.02).round(1);
let j = [
	(g / 2 + 1).round(1) / 9 ^ i,
	30,
	(g * 3 + 40)
].product;
let h = bLowPass(f(0.1) / 8 + 0.5 * f(252) * g, j, 0.05);
let c = [
	f(25 + f(50.01) * h * 50),
	f(50.5 * f(50) / 5 + 0.5),
	f(0.505)
].product / 5;
[
	c,
	pitchShift(c, 0.5, 0.5, 0, 0.5),
	pitchShift(c, 0.5, (5 ^ f(0.005)).round(1), 0.05, 0.05)
].mix
