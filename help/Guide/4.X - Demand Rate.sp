/* 4.X - Demand Rate */
[2 3 5].collect { :f |
	let t = Impulse(f, 0);
	let n = Dseq(Infinity, [60 63 67 69]);
	Demand(t, 0, n).MidiCps
}.SinOsc(0).Splay * 0.1

# Annotation

_Demand Rate_ refers to a category of unit generators that are not scheduled on either the audio or control rate sample clocks,
but instead calculate values when requested to by either `Demand`, `Duty` or `TDuty`.
