{- SinOsc.2.sl -}
var modIndex = MouseY(0, 1000, 0, 0.2);
var modFreq = LinExp(MouseX(0, 1, 0, 0.2), 0, 1, 5, 5000);
SinOsc(440 + (modIndex * SinOsc(modFreq, 0)), 0) * 0.1

{- ---- notes.md ---- -}
# SinOsc

Frequency modulation.

Mouse control.
