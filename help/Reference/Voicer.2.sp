/* Voicer.2 */
let k = 9;
let lfo = sinOsc(0.5, 0);
let tr = { impulse(rand(0.15, 0.85), rand(0, 1)) } ! k;
(
	w: trig(tr, 0.25),
	p: latch(sinOsc(rand(0.25, 1.5), 0).linLin(-1, 1, 0.15, 0.95), tr),
	z: tRand(0.1, 0.2, tr)
).Voicer { :e |
	sinOsc(e.p.unitCps, 0) * lfo * e.w * e.z
}.splay2.combC(0.5, 0.2, 3)

# Voicer

𝓥 (_Voicer_) has a second form that reads event data from a _Record_ (a dictionary where all of the keys are strings).
It allows event data to be written using synthesis graphs.
For each voice a function is evaluated to answer a _Record_ associating event keys with unit generator graphs.

This program writes only the _w_ (_gate_), _p_ (_pitch_) and _z_ (_pressure_) fields of the first 16 voices.
Unset fields retain their default values.

This program combines the _VoiceWriter.1_ (𝓥𝓌) generator and the _combC.2_ reader programs into a single program.
