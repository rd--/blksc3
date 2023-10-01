(* EqPan2 ; equal power stereo pan *)
EqPan2(
	PinkNoise() * 0.1 + (SinOsc(48.MidiCps, 0) * 0.05),
	SinOsc(1, 0)
)

(* ---- notes.md ---- *)
A quiet C3 sine tone is mixed with pink noise and panned following a one hertz sine oscillator.
