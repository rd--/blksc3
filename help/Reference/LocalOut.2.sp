/* localOut ; resonator, must subtract blockSize for correct tuning */
let p = localIn(1, 0);
let i = impulse(1, 0);
let d = delayC(i + (p * 0.995), 1, 440.reciprocal - controlDur());
[
	p <! localOut(d),
	sinOsc(440, 0) * 0.05
]
