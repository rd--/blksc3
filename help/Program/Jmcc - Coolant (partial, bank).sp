/* Coolant (Jmcc) */
{
	ringzBank(
		onePole(brownNoise() * 0.002, 0.95),
		{ rand(40, 2040) } ! 10,
		[1],
		[0.1]
	)
} ! 2

# Notes

Partial, fixed resonators (`ringzBank`) block.

This form can only be made into a texture using a scheduled texture generator,
that re-evaluates the graph at each transition.
