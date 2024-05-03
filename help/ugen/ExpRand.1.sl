{- ExpRand.1 -}
var harmonics = 16;
var f = {
    Pan2(SinOsc(ExpRand(100, 2000), 0), Rand(-1, 1), SinOsc(1 / Rand(3, 6), 0) * Rand(0.1, 0.9))
};
f !+ harmonics / (2 * harmonics)

{- ---- notes.md ---- -}
# ExpRand

_ExpRand_ generates a single random value in an exponential distribution in the indicated range.

Here it is used to generate a frequency input for a sine wave oscillator.

Shimmering harmonics,
courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
