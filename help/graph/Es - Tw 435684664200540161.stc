;; tw-435684664200540161 (es)
var f = { :i |
    var m = i % (LfNoise2(0.01) * 50 + 50) + (LfNoise2(0.1) * 10 + 40);
    SinOsc(m.MidiCps, 0) * (LfNoise2(1) * 0.01 + 0.01)
};
1.to(99).collect(f).Splay2

;; ---- notes.md
[status/435684664200540161](https://twitter.com/sluyterrific_sc/status/435684664200540161)

A simple stereo distribution of _SinOsc_ oscillators with randomly modulated (_LfNoise2_) parameters.

The frequency of each oscillator is derived using the index of the iteration process (_collect_).
