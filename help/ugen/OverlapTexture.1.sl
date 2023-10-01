(* OverlapTexture.1 *)
OverlapTexture({ :tr |
	Pan2(SinOsc(TRand(110, 440, tr), 0), TRand(-1, 1, tr), TRand(0.01, 0.05, tr))
}, 3, 5, 7)

(* ---- notes.md ---- *)
The _graph_ form of _OverlapTexture_ sums an array of _#_ programs.

Each program receives a _trigger_ input which is set each time the program restarts.

The programs are enveloped, so the transition between states happens when the program is muted.

This program overlaps seven sine tones.
Each envelope has a sustain time of three seconds and a transition time of five seconds.
This makes each voice eleven seconds long, making the time between voice entries 11/7 seconds.
Each voice randomly adjusts frequency, stereo location and amplitude when the voice is reset.
