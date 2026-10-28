/* http://twitter.com/hrhkymd/status/1601331785409134592 */
let b = 1 / 25.6;
let p = impulse(b, 0);
let f = Choose(p, [58 58.2 62; 56 56.2 67]) ++ [39 51 60 63 65];
let t = Choose(p, [-2 0 4]) + f;
{
	let osc = sinOsc(
		t.midiCps,
		rlpf(varSaw(b * 32, 0, 0.5) * 2000, 9, 0.1) * 0.001 + 10
	);
	let env = {
		lfPulse(b * 16, 1.pi, lfNoise0(500)) * lfNoise0(b * 128).linLin(-1, 1, 0, 0.2)
	} ! 9;
	(osc * env.lag(10)).sum
} ! 2
