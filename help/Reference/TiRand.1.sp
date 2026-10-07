/* TiRand.1.sl */
let scale = [0 2 4 5 7 9 10 12].LocalBuf;
{ :tr |
	{
		let degree = TiRand(0, 7, tr);
		let octave = TiRand(4, 7, tr);
		let pitchClass = Index(scale, degree);
		let mnn = (octave * 12) + pitchClass;
		let numHarm = TiRand(1, 4, tr);
		Blip(mnn.MidiCps, numHarm) * 0.05
	} !^ 7
}.OverlapTexture(4, 0.05, 2).Mix

# TiRand

- _TiRand(lo, hi, trig)_

Triggered integer random number generator.
Generates a random integer value in uniform distribution from lo to hi each time the trig signal changes from nonpositive to positive values

This program generates random degree, octave and number of harmonics value for a seven voice overlapping texture.
