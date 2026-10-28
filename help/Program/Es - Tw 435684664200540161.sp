/* Tw-435684664200540161 (Es) */
let f = { :i |
    let m = (
	    i % (lfNoise2(0.01) * 50 + 50)
	    +
	    (lfNoise2(0.1) * 10 + 40)
    );
    sinOsc(
	    m.midiCps,
	    0
    ) * (lfNoise2(1) * 0.01 + 0.01)
};
1:99.collect(f/1).splay2

# Annotation

[status/435684664200540161](https://twitter.com/sluyterrific_sc/status/435684664200540161)

A simple stereo distribution of `sinOsc` oscillators,
with randomly modulated (`lfNoise2`) parameters.

The frequency of each oscillator is derived using the index of the iteration process (`collect`).
