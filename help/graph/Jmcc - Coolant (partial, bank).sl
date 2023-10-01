(* coolant (jmcc) *)
{
	RingzBank(
		OnePole(BrownNoise() * 0.002, 0.95),
		{ Rand(40, 2040) } ! 10,
		[1],
		[0.1]
	)
} ! 2

(* ---- notes.md ---- *)
Partial, fixed resonators (_RingzBank_) block.

This form can only be made into a texture using a scheduled texture generator that re-evaluates the graph at each transition.
