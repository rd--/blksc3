/* pmOsc.1 */
let rate = 5;
let trig = impulse(5, 0);
let freq = tRand([36, 60], [72, 86], trig).midiCps;
let ratio = 2;
let env = decay2(trig, 0, 1.25 / rate);
pmOsc(freq, freq * ratio, 3 + env * 4, 0) * env * 0.25

# pmOsc

Ping pong, courtesy [Coc](https://github.com/cianoc/supercollider_fragments)

