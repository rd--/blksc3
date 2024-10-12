{- Sc-140 ; 19 ; Ds (Mcld) -}
let a = [0.02, 0.1, 1, 2, 3, 4];
let k = LfPar(a + 0.5, 0).sum;
let f = Latch(k, Impulse(a, 0));
Splay2(SinOsc(f * 100 + 300, 0) / 5)

{- ---- notes.md ---- -}
_k_ is the _sum_ of five _LfPar_ oscillators with frequencies given by _a_.

_f_ is an array of five _Latch_ filters that sample and hold _k_ at frequencies given by _a_.

The sound is a stereo displacement (_Splay_) of five _SinOsc_ oscillators with frequencies given by _f_.
