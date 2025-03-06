/* Tw-435684664200540161 (Es) */
let f = { :i |
    let m = (
	    i % (LfNoise2(0.01) * 50 + 50)
	    +
	    (LfNoise2(0.1) * 10 + 40)
    );
    SinOsc(
	    m.MidiCps,
	    0
    ) * (LfNoise2(1) * 0.01 + 0.01)
};
1:99.collect(f:/1).Splay2

# Annotation

[status/435684664200540161](https://twitter.com/sluyterrific_sc/status/435684664200540161)

A simple stereo distribution of `SinOsc` oscillators,
with randomly modulated (`LfNoise2`) parameters.

The frequency of each oscillator is derived using the index of the iteration process (`collect`).
