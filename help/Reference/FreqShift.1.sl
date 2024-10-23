/* FreqShift.1 */
let a = Blip(60, 4) * LfGauss(4, 1 / 8, 0, 1, 0);
let b = a / 4 + LocalIn(2, 0);
let c = FreqShift(b, LfNoise0(1 / 4) * 90, 0);
c <! LocalOut(DelayC(c, 1, 0.1) * 0.9)

/* ---- notes.md ---- */
# FreqShift (ν↕)

- _FreqShift(input, shift, phase)_

Frequency shifter.

- input: audio input
- shift: amount of shift in cycles per second
- phase: phase of the frequency shift (0 - 2pi)

FreqShift implements single sideband amplitude modulation, also known as frequency shifting, but not to be confused with pitch shifting.  Frequency shifting moves all the components of a signal by a fixed amount but does not preserve the original harmonic relationships.
