/* tiRand.1.sl */
let scale = [0 2 4 5 7 9 10 12].localBuf;
{ :tr |
	{
		let degree = tiRand(0, 7, tr);
		let octave = tiRand(4, 7, tr);
		let pitchClass = ClipIndex(scale, degree);
		let mnn = (octave * 12) + pitchClass;
		let numHarm = tiRand(1, 4, tr);
		blip(midiCps(mnn), numHarm) * 0.05
	} !^ 7
}.overlapTexture(4, 0.05, 2).mix

# tiRand

- _tiRand(lo, hi, trig)_

Triggered integer random number generator.
Generates a random integer value in uniform distribution from lo to hi each time the trig signal changes from nonpositive to positive values

This program generates random degree, octave and number of harmonics value for a seven voice overlapping texture.
