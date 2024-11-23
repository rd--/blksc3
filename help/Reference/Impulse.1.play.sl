/* Impulse.2 */
var t = Impulse(1 / 3, 0);
var m = { Rand(1, 3) } ! 2;
var env = Decay2(t, 0.01 * m, 1 * m) / (1 .. 6);
Splay2(SinOsc([60, 64, 67, 71, 74, 78].MidiCps, 0) * env) * 0.1

/* ---- notes.md ---- */
# Impulse

- _Impulse(freq, phase)_

Impulse oscillator.
Outputs non band limited single sample impulses.

- freq: frequency in Hertz
- phase: phase offset in cycles (0..1)

Lovely bells,
courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
