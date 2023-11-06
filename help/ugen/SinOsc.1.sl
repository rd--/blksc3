(* SinOsc.1.sl *)
Splay2(
	{
		Pan2(SinOsc(SinOsc(1 / 10, Rand(0, 6)) * 200 + 600, 0), Rand(0, 1), 0.05)
	} ! 15
).sum

(* ---- notes.md ---- *)
# SinOsc

Random sine tones, courtesy <https://github.com/cianoc/supercollider_fragments>
