/* impulse.2 */
let t = impulse(1 / 3, 0);
let m = { rand(1, 3) } ! 2;
let env = decay2(t, 0.01 * m, 1 * m) / (1 .. 6);
splay2(sinOsc([60, 64, 67, 71, 74, 78].midiCps, 0) * env) * 0.1

# impulse

- _impulse(freq, phase)_

impulse oscillator.
Outputs non band limited single sample impulses.

- freq: frequency in Hertz
- phase: phase offset in cycles (0..1)

Lovely bells,
courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
