{- coolant ; jmcc #2 -}
var o = OnePole(BrownNoise() * 0.002, 0.95);
XFadeTexture({ :tr |
	{
		Ringz(o, TRand(0, 2000, tr) + 40, 1)
	} !^ 10
}, 4, 4)

{- ---- notes.md ---- -}
Coolant texture, individual resonator (_Ringz_) blocks.

A ≔ block declares and initialises a variable.

A λ block with a ⍵ input defines a one-argument function.
⍵ indicates the argument name.
← receives the return value of the function.

A ◠₂ block distributes an array of signals at ⟦∙⟧ across the stereo field.

A ! block creates an array of # places by evaluating the function at 𝑓 # times.

A λ block with only a ← input defines a zero-argument function.

A ⋏ₜ block is a resonant filter.
∙ is the signal to be processed,
ν is frequency in hertz,
↘ is decay time in seconds.
× and + are output multiply and add inputs.

A ⌽ block is a one pole filter,
⊗ indicates a filter coefficient.

A ⍰𝒃 block is a brown noise generator.

A ⤴⚁ block is a triggered random number generator.
⌊ is the minimum bound,
⌉ the maximum bound, and
⤴ the trigger.

A ᨏ block generates an overlapping texture by cross-fading two copies of a sound.
𝑓 is the function to be triggered for each component of the texture,
⌒ is the sustain time, and
⤢ is the transition time.
