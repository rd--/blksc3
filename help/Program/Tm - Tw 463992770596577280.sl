{- https://twitter.com/thormagnusson/status/463992770596577280 (tm) -}
let k = 9.to(28).atRandom;
let f = { :x |
    let e = LfNoise2(0.5) * Line(0, 0.1, Rand(0, 99)) / (x * 0.2);
    SinOsc(30 * x + LinLin(LfNoise2(0.1), -1, 1, -2, 2), 0) * e
};
{ 1.to(k).collect(f:/1).sum } ! 2

{- ---- notes.md ---- -}
_f_ is applied (twice) to the integers between 1 and _k_.

_k_ is chosen anew each time the program is evaluated.

The shape of the graph may be different each time the program is run.

If _k_ is 9 there will be 9 × 2 = 18 ∿ oscillators.

If _k_ is 28 there will be 28 × 2 = 56.
