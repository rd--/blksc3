/* 4.X - Idioms */
let f = MouseY(123, 234, 1, 0.2);
Resonz(
	{ WhiteNoise() } ! 2 * LfSaw(
		MouseX(10, 60, 1, 0.2),
		-1
	).Max(0),
	SinOsc(0.2, 0) * f + (1.05 * f),
	0.1
)

# Annotation

An _idiom_ is a small program that is often repeated.
!λ is an idiom, and the toolbox includes it in the _List_ category.
This program is the _Noise Burst Sweep_ example from SuperCollider Two.
