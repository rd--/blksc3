{- Array Inputs, Array Expansion -}
let m = [0 2 3 5 7 9] + 48;
let k = m.size + 1;
let x = MouseX(0, k, 0, 0.2);
let y = MouseY(0, k, 0, 0.2);
SinOsc(Select([x, y], m).MidiCps, 0) * 0.1

{- ---- notes.md ---- -}
# Array Inputs, Array Expansion

When a signal block receives an array as an input there are two distinct behaviors.

In one case the block becomes an array of blocks.
_SinOsc([440, 441], 0)_ has the same meaning as _[SinOsc(440, 0), SinOsc(441, 0)]_.
This behaviour is called _array expansion_, and is the ordinary rule for SuperCollider unit generators.

In the other case the block expects an array as an input and processes it directly.
☜ (_Select_) uses ☞ (_which_) to index into ⟦⟧ (_array_).
The array input allows _Select_ to switch between any number of signals.
This behaviour is called _array processing_, and is the exception for SuperCollider unit generators.
In SuperCollider this rule is specific to particular inputs, _Select_ is still subject to array expansion at _which_.

In this program there are two sine oscillators,
in both cases frequencies are selected from the array _m_,
in one case indexed by ☟𝑥 in the other by ☟𝑦.
