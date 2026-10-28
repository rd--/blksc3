/* Sc-140 ; 19 ; Ds (Mcld) */
let a = [0.02 0.1 1 2 3 4];
let k = lfPar(a + 0.5, 0).sum;
let f = latch(k, impulse(a, 0));
splay2(sinOsc(f * 100 + 300, 0) / 5)

# Annotation

_k_ is the _sum_ of five `lfPar` oscillators with frequencies given by _a_.

_f_ is an array of five `latch` filters that sample and hold _k_ at frequencies given by _a_.

The sound is a stereo displacement (`splay2`) of five `sinOsc` oscillators,
with frequencies given by _f_.
