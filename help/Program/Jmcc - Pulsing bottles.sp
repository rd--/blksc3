/* Pulsing bottles (Jmcc) #2 */
let n = 6;
let f = {
	let a = lfPulse(
		4 + rand(0, 10),
		0,
		rand(0, 0.7)
	) * 0.8 / n;
	let l = sinOsc(
		0.1 + rand(0, 0.4),
		rand(0, 2 * pi)
	);
	pan2(
		resonz(
			whiteNoise(),
			400 + linRand(0, 7000, 0),
			0.01
		),
		l,
		a
	)
};
f:/0 !+ n

