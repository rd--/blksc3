{- FbSineC.1 -}
FbSineC(
	LfNoise2([1 2]) * 1000 + 10000,
	LfNoise2([1 2]) * 32 + 33,
	LfNoise2([1 2]) * 0.5,
	LfNoise2([1 2]) * 0.05 + 1.05,
	LfNoise2([1 2]) * 0.3 + 0.3,
	0.1,
	0.1
) * 0.05

{- ---- notes.md ---- -}
_FbSineC_ is a cubic-interpolating sound generator based on the difference equations:

- x(n+1) = sin(im * y(n) + fb * x(n))
- y(n+1) = (a * y(n) + c) % 2pi

This uses a linear congruential function to drive the phase indexing of a sine wave.

For _im_ of 1, _fb_ of 0, and _a_ of 1 a normal sinewave results.

In this program the input parameters are randomly modulated.
