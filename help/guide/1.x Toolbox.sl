{- Toolbox -}
let tr = Impulse(Rand(0.5, 1) / [3, 5, 7, 9], 0);
Hpf(PinkNoise() * TRand(0.05, 0.15, tr) * Decay2(tr, 3, 27), TLine(300, [3, 9, 12, 15] * 1000, 3, tr)).Splay2

{- ---- notes.md ---- -}
# Toolbox

The area at the left of the workspace is the _toolbox_.
It contains instances of all of the blocks the system knows about,
organised into _categories_.
Blocks are fetched by dragging them out of the toolbox and into the workspace.

The blocks in each category are all drawn in the same colour,
shown to the left of the category name.
Categories are grouped into _families_, also indicated by colouring.

This program contains blocks belonging to each of the five families of signal processing objects:

1. ⊥ (_Impulse_) is in _Generator>Osc_ and ⍰𝒑 (_PinkNoise_) is in _Generator>Noise_
2. ◩ (_HPF_) is in _Processor>Filter_
3. ⤴― (_TLine_) is in _Trigger>Env_and ⤴⚁ (_TRand_) is in _Trigger>Rand_
4. ↘₂ (_Decay2_) is in _Env>Flt_
5. ⚁ (_Rand_) is in _Random>Gen_

In addition
× and ÷ are in _Math_,
⟦⟧ is in _Array_,
≔ is in _Var_,
and “ and ▷ are in _Meta_.

This program generates quiet pink noise processed by with four upward sweeping filters.
