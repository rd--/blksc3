/* Sequencer.1 (Jmcc) */
let clock = Impulse(8, 0);
let root = Sequencer([24 26 24 22], PulseDivider(clock, 64, 0));
let note = Sequencer([33 33 35 36 45 47 38 40 33 33 35 36 47 48 50 52], clock);
let freq = (note + root).midiCps;
let trig = ImpulseSequencer([0.4 0 0.1 0.1 0.4 0.1 0.1 0.1], clock);
let env = Decay2(trig, 0.005, 1.4) * 0.25;
let z = VarSaw(freq * [1, 1.505], 0, MouseY(0, 1, 0, 0.2)) * env;
CombN(z, 0.26, 0.26, 4).softClip

# Sequencer

Sequence of shifting sequences.
