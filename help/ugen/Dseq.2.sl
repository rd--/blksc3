{- Dseq.2 -}
var m = { :f |
	Demand(
		Impulse(f, 0),
		0,
		Dseq(inf, [60 63 67 69])
	).MidiCps
};
Splay2(SinOsc([2, 3, 5].collect(m), 0)) * 0.1

{- ---- notes.md ---- -}
# Dseq
