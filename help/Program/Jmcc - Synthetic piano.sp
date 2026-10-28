/* Synthetic piano (Jmcc) #3 */
{
	let n = rand(36, 90);
	let e = decay2(
		impulse(rand(0.1, 0.5), 1.rand0) * 0.1,
		0.008,
		0.04
	);
	let z = 1:3.collect { :i |
		let dt = 1 / (n + [-0.05 0 0.04][i]).midiCps;
		combL(lfNoise2(3000) * e, dt, dt, 6)
	};
	eqPan2(z.sum, n - 36 / 27 - 1)
} !> 3
