/* Saw.1 */
let t = Dust([12, 18]);
let f = LfNoise0(TRand(1, 64, t)) * [9000, 12000] + 9500;
let o = Saw(
	[
		f,
		f * TRand(0.750, 0.7505, t),
		f * TRand(0.975, 1.025, t)
	]
).sum;
(o * TRand(0.0, 0.5, t)).Clip2(0.75)
