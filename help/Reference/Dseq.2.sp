/* Dseq.2 */
let m = { :f |
	Demand(
		Impulse(f, 0),
		0,
		Dseq(Infinity, [60 63 67 69])
	).MidiCps
};
Splay2(SinOsc([2, 3, 5].collect(m:/1), 0)) * 0.1

# Dseq
