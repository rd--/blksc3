/* VoiceWriter.1.sl */
voiceWriter(1, 16) {
	let tr = impulse(rand(0.15, 0.85), rand(0, 1));
	(
		w: trig(tr, 0.25),
		p: latch(linLin(sinOsc(rand(0.25, 1.5), 0), -1, 1, 0.15, 0.95), tr),
		z: tRand(0.1, 0.2, tr)
	)
}

# VoiceWriter

_VoiceWriter_ (𝓥𝓌) is the inverse of _Voicer_.
It allows event data to be written using synthesis graphs.
For each voice a function is evaluated to answer a _Record_ associating event keys with unit generator graphs.

This program writes only the _w_ (_gate_), _p_ (_pitch_) and _z_ (_pressure_) fields of the first 16 voices.
Unset fields retain their default values.

This program does not generate any sound.
To hear the pattern we must run this program at the same time as another program that reads the control data.
There are many such programs in the Help system, the _combC.2_ or the _Dx7.2_ programs, for instance.
