/* freqShift.1 */
let a = blip(60, 4) * lfGauss(4, 1 / 8, 0, 1, 0);
let b = a / 4 + localIn(2, 0);
let c = freqShift(b, lfNoise0(1 / 4) * 90, 0);
c <! localOut(delayC(c, 1, 0.1) * 0.9)

# freqShift (ν↕)

- _freqShift(input, shift, phase)_

Frequency shifter.

- input: audio input
- shift: amount of shift in cycles per second
- phase: phase of the frequency shift (0 - 2pi)

freqShift implements single sideband amplitude modulation, also known as frequency shifting, but not to be confused with pitch shifting.  Frequency shifting moves all the components of a signal by a fixed amount but does not preserve the original harmonic relationships.
