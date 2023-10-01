(* Sequencer.1 (Jmcc) *)
var clock = Impulse(8, 0);
var root = Sequencer([24, 26, 24, 22], PulseDivider(clock, 64, 0));
var note = Sequencer([33, 33, 35, 36, 45, 47, 38, 40, 33, 33, 35, 36, 47, 48, 50, 52], clock);
var freq = (note + root).MidiCps;
var trig = ImpulseSequencer([0.4, 0.0, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1], clock);
var env = Decay2(trig, 0.005, 1.4) * 0.25;
var z = VarSaw(freq * [1, 1.505], 0, MouseY(0, 1, 0, 0.2)) * env;
CombN(z, 0.26, 0.26, 4).SoftClip

(* ---- notes.md ---- *)
Sequence of shifting sequences.
