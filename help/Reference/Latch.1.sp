/* latch.1 */
sinOsc(300 + (200 * latch(sinOsc(13.3, 0), impulse([10, 11], 0))), 0) * 0.1

# latch

⍀ (_latch_) samples and holds an ∙ (_input_) signal at each ⤴ (_trigger_).

In this program a ∿ (_sinOsc_) with a fixed ν (_frequency_) of 13.3 _hz_ is sampled at regular intervals using ⊥ (_impulse_),
at 10 _hz_ in the left channel and 11 _hz_ in the right.

The held value is scaled to lie in the range _(100, 500)_ and is supplied as the ν input to a second ∿.

Courtesy [Nc](https://composerprogrammer.com/teaching/supercollider/sctutorial/tutorial.html), 3.4

