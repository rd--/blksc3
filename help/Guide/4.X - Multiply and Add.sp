/* 4.X - Multiply and Add */
SinOscFb(
	[400 301],
	LfNoise2([0.57 0.35]) * 0.7 + 0.7
) * (
	LfNoise2([0.79 0.57]) * 0.05 + 0.05
)

# Annotation

All unit generator blocks with an output port have × and + inputs for adjusting scale and bias.
The adjustments are made after the block is defined,
and do not form part of the list processing behaviour of the block.
