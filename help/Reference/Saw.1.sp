/* saw.1 */
let t = dust([12, 18]);
let f = lfNoise0(tRand(1, 64, t)) * [9000, 12000] + 9500;
let o = saw(
	[
		f,
		f * tRand(0.750, 0.7505, t),
		f * tRand(0.975, 1.025, t)
	]
).sum;
(o * tRand(0.0, 0.5, t)).bilateralClip(0.75)
