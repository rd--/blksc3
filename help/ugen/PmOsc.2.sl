{- PmOsc.2 -}
var f = Latch((SinOsc([100, 200, 300, 550], 0) * 100 + 110).sum, Impulse(7, 0));
var e = Decay2(Impulse(7, 0), 0.02, 0.2);
PmOsc(f, f * [1.25, MouseX(1, 3, 0, 0.2)], e * [5, MouseY(3, 9, 0, 0.2)], 0) * e * 0.1

{- ---- notes.md ---- -}
# PmOsc

Envelope used also for the index, courtesy <https://github.com/cianoc/supercollider_fragments>
