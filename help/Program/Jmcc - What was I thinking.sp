/* What was i thinking? (Jmcc) #2 */
let i = lfPulse(0.1, 0, 0.05) * impulse(8, 0) * 500;
let f = (sinOsc(4, 0) + 80).max(decay(i, 2));
let p = pulse(f, lfNoise1(0.157) * 0.4 + 0.5) * 0.04;
let z = rlpf(p, lfNoise1(0.2) * 2000 + 2400, 0.2) * 0.25;
let c = { :i |
	combL(
		i,
		0.06,
		lfNoise1(rand(0, 0.3)) * 0.025 + 0.035,
		1
	)
};
let y = z * 0.6;
{ [y, y].collect(c:/1).sum } ! 2 + z
