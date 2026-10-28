/* lfNoise1.1 */
var o = sinOsc((lfNoise1(0.5) * 600 + (lfSaw(1.5, 0) * 50 + 500)).Abs, 0) * 0.1;
var d = combC(o, 3.0, [1.35, 0.7], 6);
pan2(o, 0, 1) + d

# lfNoise1

- _lfNoise1(freq)_

Ramp noise.
Generates linearly interpolated random values at a rate given by the nearest integer division of the sample rate by the freq argument.

- freq: approximate rate at which to generate random values in Hertz

Wandering sines,
courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
