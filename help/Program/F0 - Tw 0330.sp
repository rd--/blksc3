/* https://sccode.org/1-4Qy ; f0 ; 0330 */
let c = sinOsc([2 3] / 8, 0) % 0.5;
let o = freqShift(
	c,
	sinOsc(1 / [9 5], 0).round(c > 0.125) + 1 * [3 2] * 99,
	0
).tanh / 2;
gVerb(o, 200, 9, 1, 1, 9, 1, 0.1, 0.5, 300).transpose.mix / 3
