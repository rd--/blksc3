/* combC ; glissandi */
let lwr = 48;
let tr = { dust(0.65) } ! 2;
{
	let n = linLin(lfNoise2(0.1), -1, 1, lwr, 72);
	let e = decay2(tr, 0.05, tRand(0.05, 0.75, tr));
	let x = pinkNoise() * e * 0.1;
	let m = lfNoise2(0.1);
	let f = lag(n.midiCps, 0.25);
	combC(x, lwr.midiCps.reciprocal, f.reciprocal, linLin(m, -1, 1, 1, 8))
} !+ 12 * 0.1

# combC

- _combC(in, maxdelaytime, delaytime, decaytime)_

Comb delay line. combN uses no interpolation, combL uses linear interpolation, combC uses cubic interpolation.

- in: the input signal.
- maxdelaytime: the maximum delay time in seconds. used to initialize the delay buffer size.
- delaytime: delay time in seconds.
- decaytime: time for the echoes to decay by 60 decibels. If this time is negative then the feedback coefficient will be negative, thus emphasizing only odd harmonics at an octave lower.
