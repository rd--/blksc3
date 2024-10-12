{- XFadeTexture.1 -}
XFadeTexture({ :tr |
	{
		SinOsc(TRand(110, 440, tr), 0) * TRand(0.01, 0.1, tr)
	} !^ 7
}, 3, 5)

{- ---- notes.md ---- -}
# XFadeTexture

The _graph_ form of _XFadeTexture_ sums two overlapping copies of a program.

Each program receives a _trigger_ input which is set each time the program restarts.

The programs are enveloped, so the transition between states happens when the program is muted.

This program overlaps two copies of a graph of seven sine tones.
Each envelope has a sustain time of three seconds and a transition time of five seconds.
This makes each voice sixteen seconds long, and the time between voice entries eight seconds.
Each voice randomly adjusts frequency and amplitude when the voice is reset.
