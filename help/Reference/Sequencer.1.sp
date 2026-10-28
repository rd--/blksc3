/* sequencer.1 (Jmcc) */
let clock = impulse(8, 0);
let root = sequencer([24 26 24 22], pulseDivider(clock, 64, 0));
let note = sequencer([33 33 35 36 45 47 38 40 33 33 35 36 47 48 50 52], clock);
let freq = (note + root).midiCps;
let trig = impulseSequencer([0.4 0 0.1 0.1 0.4 0.1 0.1 0.1], clock);
let env = decay2(trig, 0.005, 1.4) * 0.25;
let z = varSaw(freq * [1, 1.505], 0, mouseY(0, 1, 0, 0.2)) * env;
combN(z, 0.26, 0.26, 4).softClip

# sequencer

Sequence of shifting sequences.
