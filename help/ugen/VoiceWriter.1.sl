(* VoiceWriter *)
VoiceWriter(16) {
	| tr = Impulse(Rand(0.15, 0.85), Rand(0, 1)); |
	(
		w: Trig(tr, 0.25),
		p: Latch(LinLin(SinOsc(Rand(0.25, 1.5), 0), -1, 1, 0.15, 0.95), tr),
		z: TRand(0.1, 0.2, tr)
	)
}

(* ---- notes.md ---- *)
# VoiceWriter

_VoiceWriter_ (𝓥𝓌) is the inverse of _Voicer_.
It allows event data to be written using synthesis graphs.
For each voice a function is evaluated to answer a _Record_ associating event keys with unt generator graphs.

This program writes only the _w_ (_gate_), _p_ (_pitch_) and _z_ (_pressure_) fields of the first 16 voices.
Unset fields retain their default values.

This program does not generate any sound.
To hear the pattern we must run this program at the same time as another program that reads the control data.
There are many such programs in the Help system, the _CombC.1_ or the _Dx7.2_ programs, for instance.
