{- Sw ; switch controller -}
Splay2(1.to(8).collect({ :i | SinOsc(110 * i, 0) * Sw(i) * SinOsc(0.05, i * pi / 4) * 0.1 }))

{- ---- notes.md ---- -}
A switch is an input that has two states represented by the signals 0 and 1.

0 indicates that the switch is _off_ or _closed_.
1 indicates it is _on_ or _open_.

There are two types of switches that this input is intended to receive.

1. _Maintained_ switches can be either open or closed, and can be switched from one state to the other.

2. _Momentary_ switches are ordinarily closed, and must be held open.

There are two kinds of momentary switches.
One acts as a _gate_, it is open for as long as it is pressed.
The other acts as a _trigger_, it is opened for a fixed amount of time each time it is pressed.

This program reads from the first 8 input switches.

Each switch turns an oscillator on or off.

This program will work with both maintained and momentary switches,
but is most idiomatic with the former.
