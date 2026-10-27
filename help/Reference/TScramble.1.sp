/* TScramble.1.sl */
let tr = Impulse(1, 0);
Splay2(SinOsc(TScramble(tr, [60, 62, 64, 65, 67, 69, 71, 72].midiCps), 0)) * 0.1

# TScramble

C-major sine tones across stereo field, scrambles on equally spaced pulses.

_TScramble_ requires _sc3-rdu_.
