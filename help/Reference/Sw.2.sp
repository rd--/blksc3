/* Sw ; switch */
splay2(1.to(8).collect({ :i | sinOsc(110 * i, 0) * asr(cc(i), 0.01, 0.25, -4) * 0.1 }))

# Sw.2

This program reads from the first 8 input switches.

Each switch is the gate input on an envelope generator.

This program will work with both maintained and momentary switches,
but is most idiomatic with the latter.
