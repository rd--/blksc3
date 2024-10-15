{- Toolbox -}
let tr = Impulse(Rand(0.5, 1) / [3, 5, 7, 9], 0);
Hpf(PinkNoise() * TRand(0.05, 0.15, tr) * Decay2(tr, 3, 27), TLine(300, [3, 9, 12, 15] * 1000, 3, tr)).Splay2

{- ---- notes.md ---- -}
# Toolbox

The area at the left of the workspace is the _toolbox_.
It contains instances of the blocks the system knows about,
organised into _categories_.
There are two toolboxes, a _complete_ and a _small_ toolbox, the 𝑇 button switches between them.
Blocks are fetched by dragging them out of the toolbox and into the workspace.

The blocks in each category are all drawn in the same colour,
shown to the left of the category name.
Categories are grouped into _families_, also indicated by colouring.

This program contains blocks belonging to each of the five families of signal processing objects:

1. ⊥ (_Impulse_) is in _Oscillator_
2. ⍰𝒑 (_PinkNoise_) is in _Noise_
3. ◩ (_Hpf_) is in _Filter_
4. ⤴― & ⤴⚁ (_TLine_ & _TRand_) are in _Trigger_
5. ↘₂ (_Decay2_) is in _Envelope_
6. ⚁ (_Rand_) is in _Random_
7. ◠ (_Splay_) is in _Pan_

In addition
× and ÷ are in _Math_,
⟦⟧ is in _List_,
≔ is in _Variables_,
and “ and ▷ are in _Meta_.

This program generates quiet pink noise processed by four upward sweeping filters.
