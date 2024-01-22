{- Latch.1 -}
SinOsc(300 + (200 * Latch(SinOsc(13.3, 0), Impulse([10, 11], 0))), 0) * 0.1

{- ---- notes.md ---- -}
# Latch

⍀ (_Latch_) samples and holds an ∙ (_input_) signal at each ⤴ (_trigger_).

In this program a ∿ (_SinOsc_) with a fixed ν (_frequency_) of 13.3 _hz_ is sampled at regular intervals using ⊥ (_Impulse_),
at 10 _hz_ in the left channel and 11 _hz_ in the right.

The held value is scaled to lie in the range _(100, 500)_ and is supplied as the ν input to a second ∿.

Courtesy <https://composerprogrammer.com/teaching/supercollider/sctutorial/tutorial.html>, 3.4

