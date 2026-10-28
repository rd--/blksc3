/* dseq.2 */
let m = { :f |
	demand(
		impulse(f, 0),
		0,
		dseq(Infinity, [60 63 67 69])
	).midiCps
};
splay2(sinOsc([2, 3, 5].collect(m/1), 0)) * 0.1

# dseq
