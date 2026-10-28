/* 4.X - Idioms */
let f = mouseY(123, 234, 1, 0.2);
resonz(
	{ whiteNoise() } ! 2 * lfSaw(
		mouseX(10, 60, 1, 0.2),
		-1
	).max(0),
	sinOsc(0.2, 0) * f + (1.05 * f),
	0.1
)

# Annotation

An _idiom_ is a small program that is often repeated.
!λ is an idiom, and the toolbox includes it in the _List_ category.
This program is the _Noise Burst sweep_ example from SuperCollider Two.
