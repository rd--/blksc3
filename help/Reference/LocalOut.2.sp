/* localOut ; resonator, must subtract blockSize for correct tuning */
var p = localIn(1, 0);
var i = impulse(1, 0);
var d = delayC(i + (p * 0.995), 1, 440.reciprocal - controlDur());
[
	p <! localOut(d),
	sinOsc(440, 0) * 0.05
]
