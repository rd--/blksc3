{- Decay2.1 -}
{
    Pan2(
        SinOsc(ExpRand(100, 3000) * (LfNoise1(1 / 6) * 0.4 + 1), 0),
        LfNoise1(1 / 8),
        Decay2(Dust(1 / 5), 0.01, 4)
    )
} !+ 15 * 0.1

{- ---- notes.md ---- -}
# Decay2

↘₂ (_Decay2_) is two ↘ (_Decay_) blocks arranged as:

> _Decay(in, decay) - Decay(in, attack)_

The ↗ (_attack_) and ↘ (_decay_) times are both in seconds.

Random impulses,
courtesy <https://github.com/cianoc/supercollider_fragments>
