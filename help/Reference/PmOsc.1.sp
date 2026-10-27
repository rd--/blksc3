/* PmOsc.1 */
let rate = 5;
let trig = Impulse(5, 0);
let freq = TRand([36, 60], [72, 86], trig).midiCps;
let ratio = 2;
let env = Decay2(trig, 0, 1.25 / rate);
PmOsc(freq, freq * ratio, 3 + env * 4, 0) * env * 0.25

# PmOsc

Ping pong, courtesy [Coc](https://github.com/cianoc/supercollider_fragments)

