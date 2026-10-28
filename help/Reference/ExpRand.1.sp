/* expRand.1 */
let harmonics = 16;
{
    pan2(sinOsc(expRand(100, 2000), 0), rand(-1, 1), sinOsc(1 / rand(3, 6), 0) * rand(0.1, 0.9))
} !+ harmonics / (2 * harmonics)

# expRand

_expRand_ generates a single random value in an exponential distribution in the indicated range.

Here it is used to generate a frequency input for a sine wave oscillator.

Shimmering harmonics,
courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
