{- EqBalance2 -}
var o = SinOsc([440, 550], 0);
EqBalance2(o.first, o.second, LfNoise1(4)) * 0.1

{- ---- notes.md ---- -}
# EqBalance2

_EqBalance2_ is a stereo signal balancer.

It places the _L_ (_left_) input in the left channel and the _R_ (_right_) input in the right channel.

It applies independent multipliers (×) to each channel.

When ⌖ (_pos_) is _-1_ only the _left_ channel is heard, the multipliers are 1 and 0, i.e. × ⟦1, 0⟧

When ⌖ is _+1_ only the right channel is heard, the multipliers are 0 and 1, i.e. × ⟦0, 1⟧

When ⌖ is _0_ the two channels are balanced and both multipliers are √½ (≈ 0.7), i.e. × ⟦√½, √½⟧

In this program two sine oscillators (at 440 and 550 _hz_) are balanced using a low frequency noise generator.
