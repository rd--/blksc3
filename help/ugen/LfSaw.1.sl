(* LfSaw.1 *)
var f = { :c | Pan2(SinOsc(LfSaw((c * 0.2 + 1)/3, 0) * 500 + 700, 0), LfNoise0(1), 0.05) };
1.to(5).collect(f).sum

(* ---- notes.md ---- *)
# LfSaw -- sawtooth oscillator

_LfSaw(freq, phase)_

A non-band-limited sawtooth oscillator. Output ranges from -1 to +1.

- freq: frequency in Hertz
- iphase: initial phase offset. For efficiency reasons this is a value ranging from 0 to 2.

This program generates interesting rising sounds,
courtesy <https://github.com/cianoc/supercollider_fragments>
