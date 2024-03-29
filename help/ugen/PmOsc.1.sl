{- PmOsc.1 -}
var rate = 5;
var trig = Impulse(5, 0);
var freq = TRand([36, 60], [72, 86], trig).MidiCps;
var ratio = 2;
var env = Decay2(trig, 0, 1.25 / rate);
PmOsc(freq, freq * ratio, 3 + env * 4, 0) * env * 0.25

{- ---- notes.md ---- -}
# PmOsc

Ping pong, courtesy <https://github.com/cianoc/supercollider_fragments>

