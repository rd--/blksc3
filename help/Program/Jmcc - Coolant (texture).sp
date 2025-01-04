/* Coolant ; Jmcc #2 */
let o = OnePole(BrownNoise() * 0.002, 0.95);
{ :tr |
	{
		Ringz(o, TRand(0, 2000, tr) + 40, 1)
	} !^ 10
}.XFadeTexture(4, 4)

# Notes

Coolant texture, individual resonator (`Ringz`) blocks.

A ≔ block declares and initialises a variable.

A λ block with a ⍵ input defines a one-argument function.
⍵ indicates the argument name.
← receives the return value of the function.

A ◠₂ block distributes an array of signals at ⟦∙⟧ across the stereo field.

A ! block creates an array of # places by evaluating the function at λ # times.

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
λ is the function to be triggered for each component of the texture,
⌒ is the sustain time, and
⤢ is the transition time.
