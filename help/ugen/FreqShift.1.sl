;; FreqShift
var a = Blip(60, 4) * LfGauss(4, 1/8, 0, 1, 0);
var b = a / 4 + LocalIn(2, 0);
var c = FreqShift(b, LfNoise0(1/4) * 90, 0);
c <! LocalOut(DelayC(c, 1, 0.1) * 0.9)

;; ---- notes.md
# FreqShift -- Frequency Shifter

_FreqShift(input, shift, phase)_

FreqShift implements single sideband amplitude modulation, also known as frequency shifting, but not to be confused with pitch shifting.  Frequency shifting moves all the components of a signal by a fixed amount but does not preserve the original harmonic relationships.

- input: audio input
- shift: amount of shift in cycles per second
- phase: phase of the frequency shift (0 - 2pi)
