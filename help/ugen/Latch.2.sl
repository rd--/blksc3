(* Latch ; generating melodic runs ; https://github.com/cianoc/supercollider_fragments *)
SinOsc(Latch(LfSaw(MouseX(0.1, 22, 0, 0.2), 0) * 500 + 600, Impulse([10, 11], 0)), 0) * 0.1

(* ---- notes.md ---- *)
# Latch

In this program ☟𝑥 (_MouseX_) controls the frequency of an ␊◿ (_LFSaw_) oscillator.

As in the the _Latch.1_ program, this signal is sampled at regular intervals as the ν (_frequency_) input to a ∿ (_SinOsc_).

When ☟𝑥 is at or near a simple ratio (i.e. _1:1_, _1:2_, _1:4_ &etc.) to ν of ⊥,
the output frequency is static, or moves very slowly, or alternates between a small number of states and so on.
