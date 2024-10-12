{- Code Generation, Simple Programming Language -}
let a = SinOsc(1,0).Abs * 0.1;
SinOsc(440, 0) * a

{- ---- notes.md ---- -}
# Code Generation, Simple Programming Language

Blocks can print themselves using _.sl_ notation.
This notation is a close relative of the SuperCollider language notation (_.sc_).

The three block fragment assigned to the variable _a_ (×, |, ∿) prints as:

> _SinOsc(1, 0).Abs * 0.1_
