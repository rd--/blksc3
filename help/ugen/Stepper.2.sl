{- Stepper.2 -}
var t = Impulse(MouseX(1, 40, 0, 0.2), 0.1);
var s = Stepper(t, 0, 0, 7, 1, 0);
var f = Select(s.kr, [72 63 67 72 55 62 63 60].MidiCps);
Saw(f) * 0.1

{- ---- notes.md ---- -}
# Stepper

Courtesy <https://composerprogrammer.com/teaching/supercollider/sctutorial/tutorial.html> 3.4
