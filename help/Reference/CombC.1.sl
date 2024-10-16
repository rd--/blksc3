{- CombC ; glissandi -}
let lwr = 48;
let tr = { Dust(0.65) } ! 2;
{
	let n = LinLin(LfNoise2(0.1), -1, 1, lwr, 72);
	let e = Decay2(tr, 0.05, TRand(0.05, 0.75, tr));
	let x = PinkNoise() * e * 0.1;
	let m = LfNoise2(0.1);
	let f = Lag(n.MidiCps, 0.25);
	CombC(x, lwr.MidiCps.Recip, f.Recip, LinLin(m, -1, 1, 1, 8))
} !+ 12 * 0.1

{- ---- notes.md ---- -}
# CombC

- _CombC(in, maxdelaytime, delaytime, decaytime)_

Comb delay line. CombN uses no interpolation, CombL uses linear interpolation, CombC uses cubic interpolation.

- in: the input signal.
- maxdelaytime: the maximum delay time in seconds. used to initialize the delay buffer size.
- delaytime: delay time in seconds.
- decaytime: time for the echoes to decay by 60 decibels. If this time is negative then the feedback coefficient will be negative, thus emphasizing only odd harmonics at an octave lower.
