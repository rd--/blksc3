/* latch.2 */
sinOsc(latch(lfSaw(mouseX(0.1, 22, 0, 0.2), 0) * 500 + 600, impulse([10, 11], 0)), 0) * 0.1

# latch

In this program ☟𝑥 (_mouseX_) controls the frequency of an ␊◿ (_LFSaw_) oscillator.

As in the the _latch.1_ program, this signal is sampled at regular intervals as the ν (_frequency_) input to a ∿ (_sinOsc_).

When ☟𝑥 is at or near a simple ratio (i.e. _1:1_, _1:2_, _1:4_ &etc.) to ν of ⊥,
the output frequency is static, or moves very slowly, or alternates between a small number of states and so on.

Generating melodic runs,
courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
