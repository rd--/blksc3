(* TScramble.1.sl *)
var tr = Impulse(1, 0);
Splay2(SinOsc(TScramble(tr, [60, 62, 64, 65, 67, 69, 71, 72].MidiCps), 0)) * 0.1

(* ---- notes.md ---- *)
# TScramble

C-major sine tones across stereo field, scrambles on equally spaced pulses.

_TScramble_ requires _sc3-rdu_.
