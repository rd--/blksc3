(* LfNoise1 ; wandering sines ; https://github.com/cianoc/supercollider_fragments *)
var o = SinOsc((LfNoise1(0.5) * 600 + (LfSaw(1.5, 0) * 50 + 500)).Abs, 0) * 0.1;
var d = CombC(o, 3.0, [1.35, 0.7], 6);
Pan2(o, 0, 1) + d

(* ---- notes.md ---- *)
# LfNoise1 -- ramp noise

_LfNoise1(freq)_

Generates linearly interpolated random values at a rate given by the nearest integer division of the sample rate by the freq argument.

- freq: approximate rate at which to generate random values in Hertz
