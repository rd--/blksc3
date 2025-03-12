/* 4.X - Type Annotations */
{
	SinOsc(
		ExpRand(333, 555),
		0
	) * Rand(0.1, 0.3)
} ! 2

# Annotation

Blocks can specify input and output types,
and these are checked by the editor.

The ! block checks that the λ input is a procedure of no arguments,
and that the # input is a number.

We cannot move the ⚁ block to the # input of !,
or the ∿ block to the λ input of !,
or the λ block to the ⊳ input.
