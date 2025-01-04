/* Code Generation, Macros */
let x = {
	Ringz(
		Dust(0.1),
		Rand(1200, 2400),
		Rand(1, 3)
	) * Rand(0, 0.05)
};
[
	{
		SinOsc(Rand(110, 220), 0) * Rand(0, 0.05)
	} !^ 16,
	x !^ 16
].sum

# Code Generation, Macros

There is a sense in which this simple program could be made simpler still.
The λ input to the ! (_Duplicate_) block is a no argument λ (_Lambda_) that is evaluated # times to generate a ⟦⟧ (_List_) of # places.
! prints itself as _proc ! count_.

! requires that the λ input be a λ,
however it could equally allow the λ to be elided,
and print itself as _{ proc } ! count_.

This form of ! would be a _macro_.
The first ! block (containing ∿) would print exactly as it currently does,
i.e. _{ SinOsc(..., 0) * ... } ! 16_.

A difficulty with macros is illustrated by the second ! block.
Here we have given a name (_x_) to the λ block (containing ⋏ₜ),
and the λ input to ! is a reference to this variable.
The macro form of ! would print this as _{ x } ! 16_,
which would make a list containing the same value (_x_) at each place.

_BlkSc_ does not implement any _macro_ like blocks,
instead requiring that λ blocks be provided in programs as required.
This is made straight-forward by blocks such a ! being pre-composed with an appropriate λ block.
