{- Code Generation, Macros -}
var x = { Ringz(Dust(0.1), Rand(1200, 2400), Rand(1, 3)) * Rand(0, 0.05) };
[
	{ SinOsc(Rand(110, 220), 0) * Rand(0, 0.05) } !^ 16,
	x !^ 16
].sum

{- ---- notes.md ---- -}
# Code Generation, Macros

There is a sense in which this simple program could be made simpler still.
The 𝑓 input to the ! block is a no argument λ that is evaluated # times to generate an ⟦⟧ of # places.
! prints itself as:

> _proc ! count_

! requires that the 𝑓 input be a λ,
however it could equally allow the λ to be elided,
and print itself as:

> _{ proc } ! count_

This form of ! would be a _macro_.
The first ! block (containing ∿) would print exactly as it currently does, i.e.:

> _{ SinOsc... }.duplicate(16)_

A difficulty with macros is illustrated by the second ! block.
Here we have given a name (_x_) to the λ block (containing ⋏ₜ),
and the 𝑓 input to ! is a reference to this variable.
The macro form of ! would print this as:

> _{ x } ! 16_

which would make an array containing the same value (_x_) at each place.
_blksc3_ does not implement any _macro_ like blocks,
instead requiring that λ blocks be provided in programs as required.

