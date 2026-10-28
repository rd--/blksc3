/* overlapTexture.1 */
{ :tr |
	eqPan2(sinOsc(tRand(110, 440, tr), 0), tRand(-1, 1, tr)) * tRand(0.01, 0.05, tr)
}.overlapTexture(3, 5, 7)

# overlapTexture

The _graph_ form of _overlapTexture_ sums an array of _#_ programs.

Each program receives a _trigger_ input which is set each time the program restarts.

The programs are enveloped, so the transition between states happens when the program is muted.

This program overlaps seven sine tones.
Each envelope has a sustain time of three seconds and a transition time of five seconds.
This makes each voice eleven seconds long, making the time between voice entries 11/7 seconds.
Each voice randomly adjusts frequency, stereo location and amplitude when the voice is reset.
