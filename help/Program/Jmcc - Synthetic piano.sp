/* Synthetic piano (Jmcc) #3 */
{
	let n = Rand(36, 90);
	let e = Decay2(
		Impulse(Rand(0.1, 0.5), 1.Rand0) * 0.1,
		0.008,
		0.04
	);
	let z = 1:3.collect { :i |
		let dt = 1 / (n + [-0.05 0 0.04][i]).MidiCps;
		CombL(LfNoise2(3000) * e, dt, dt, 6)
	};
	EqPan2(z.Sum, n - 36 / 27 - 1)
} !> 3
