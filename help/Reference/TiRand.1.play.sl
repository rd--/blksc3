/* TiRand.1.sl */
var scale = [0 2 4 5 7 9 10 12].asLocalBuf;
OverlapTexture({ :tr |
	{
		var degree = TiRand(0, 7, tr);
		var octave = TiRand(4, 7, tr);
		var pitchClass = Index(scale, degree);
		var mnn = (octave * 12) + pitchClass;
		var numHarm = TiRand(1, 4, tr);
		Blip(mnn.MidiCps, numHarm) * 0.05
	} !^ 7
}, 4, 0.05, 2)

# TiRand

- _TiRand(lo, hi, trig)_

Triggered integer random number generator.
Generates a random integer value in uniform distribution from lo to hi each time the trig signal changes from nonpositive to positive values

This program generates random degree, octave and number of harmonics value for a seven voice overlapping texture.
