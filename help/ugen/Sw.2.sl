{- Sw ; switch -}
Splay2(1.to(8).collect({ :i | SinOsc(110 * i, 0) * Asr(Sw(i), 0.01, 0.25) * 0.1 }))

{- ---- notes.md ---- -}
This program reads from the first 8 input switches.

Each switch is the gate input on an envelope generator.

This program will work with both maintained and momentary switches,
but is most idiomatic with the latter.
