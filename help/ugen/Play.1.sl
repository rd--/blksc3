;; ▷ (Play)
SinOsc([220, 220.5], 0) * -30.DbAmp

;; ---- notes.md
The ▷ (_Play_) block indicates that the signal it receives should be sent to the speakers.

<!-- ▷ is a form of comment, it is not required. -->

▷ is a statement block and can be connected to any preceding statements.

There must be only one instance of ▷, and it must be the last statement block of the program.
Otherwise it is considered an error and the program will make no sound.

This program generates two quiet sine tones.
