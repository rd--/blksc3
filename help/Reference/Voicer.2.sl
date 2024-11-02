/* Voicer.2 */
let k = 9;
let lfo = SinOsc(0.5, 0);
let tr = { Impulse(Rand(0.15, 0.85), Rand(0, 1)) } ! k;
(
	w: Trig(tr, 0.25),
	p: Latch(LinLin(SinOsc(Rand(0.25, 1.5), 0), -1, 1, 0.15, 0.95), tr),
	z: TRand(0.1, 0.2, tr)
).Voicer { :e |
	SinOsc(e.p.UnitCps, 0) * lfo * e.w * e.z
}.Splay2.CombC(0.5, 0.2, 3)

/* ---- notes.md ---- */
# Voicer

𝓥 (_Voicer_) has a second form that reads event data from a _Record_ (a dictionary where all of the keys are strings).
It allows event data to be written using synthesis graphs.
For each voice a function is evaluated to answer a _Record_ associating event keys with unit generator graphs.

This program writes only the _w_ (_gate_), _p_ (_pitch_) and _z_ (_pressure_) fields of the first 16 voices.
Unset fields retain their default values.

This program combines the _VoiceWriter.1_ (𝓥𝓌) generator and the _CombC.2_ reader programs into a single program.
