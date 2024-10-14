{- https://twitter.com/redFrik/status/1519791409921941507 ; f0 -}
let f = { :freq |
	SinOsc(freq, [0, 5])
};
let g = f(5);
let i = f(0.1) / 8 + 0.5 * f(252) * g;
let j = (g / 2 + 1).RoundTo(0) / 9 ^ (f(1) * f(0.005) + 1.02).RoundTo(0) * 30 * (g * 3 + 40);
let h = BLowPass(i, j, 0.05);
let c = [
	f(25 + f(50.01) * h * 50)
	f(50.5 * f(50) / 5 + 0.5)
	f(0.505) / 5
].product;
PitchShift(
	c,
	0.5,
	0.5,
	0,
	0.5
) + PitchShift(
	c,
	0.5,
	(5 ^ f(0.005)).RoundTo(0),
	0.05,
	0.05
) + c
