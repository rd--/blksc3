/* Type Annotations */
{
	SinOsc(
		ExpRand(333, 555),
		0
	) * Rand(0.1, 0.3)
} ! 2

/* ---- notes.md ---- }
# Type Annotations

Blocks can have type annotations specifying what type a block answers and what type each input must be.

The system does not allow incompatible types of blocks to be connected.

The ! block checks that the 𝑓 input is a procedure of no arguments,
and that the # input is a number.
The ! block also indicates that its answer is a list.

If we try to move the ⚁ block from the × input of ∿ to the # input of ! it will _bounce_ off.

Inputs can also accept _sets_ of types.

Unit generator inputs may ordinarily be either other unit generators or lists,
and in some cases numbers.

If we try and move the λ block from the 𝑓 input of ! to the input of ⊳ it will bounce off.

This program plays two quiet sine tones at random frequencies and amplitudes.
