/* lfSaw.1 */
let f = { :c | pan2(sinOsc(lfSaw((c * 0.2 + 1)/3, 0) * 500 + 700, 0), lfNoise0(1), 0.05) };
1.to(5).collect(f/1).sum

# lfSaw

- _lfSaw(freq, phase)_

Sawtooth oscillator.
A non-band-limited sawtooth oscillator. Output ranges from -1 to +1.

- freq: frequency in Hertz
- iphase: initial phase offset. For efficiency reasons this is a value ranging from 0 to 2.

This program generates interesting rising sounds,
courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
