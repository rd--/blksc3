/* decay2.1 */
{
    pan2(
        sinOsc(expRand(100, 3000) * (lfNoise1(1 / 6) * 0.4 + 1), 0),
        lfNoise1(1 / 8),
        decay2(dust(1 / 5), 0.01, 4)
    )
} !+ 15 * 0.1

# decay2

↘₂ (_decay2_) is two ↘ (_decay_) blocks arranged as:

> _decay(in, decay) - decay(in, attack)_

The ↗ (_attack_) and ↘ (_decay_) times are both in seconds.

Random impulses,
courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
