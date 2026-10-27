/* Impulse.2 */
let t = Impulse(1 / 3, 0);
let m = { Rand(1, 3) } ! 2;
let env = Decay2(t, 0.01 * m, 1 * m) / (1 .. 6);
Splay2(SinOsc([60, 64, 67, 71, 74, 78].midiCps, 0) * env) * 0.1

# Impulse

- _Impulse(freq, phase)_

Impulse oscillator.
Outputs non band limited single sample impulses.

- freq: frequency in Hertz
- phase: phase offset in cycles (0..1)

Lovely bells,
courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
