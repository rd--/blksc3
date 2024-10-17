/* Pulsing bottles (Jmcc) #2 */
let n = 6;
let f = {
	let a = LfPulse(
		4 + Rand(0, 10),
		0,
		Rand(0, 0.7)
	) * 0.8 / n;
	let l = SinOsc(
		0.1 + Rand(0, 0.4),
		Rand(0, 2 * pi)
	);
	Pan2(
		Resonz(
			WhiteNoise(),
			400 + LinRand(0, 7000, 0),
			0.01
		),
		l,
		a
	)
};
f:/0 !+ n

