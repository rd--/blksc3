/* 4.X - Demand Rate */
SinOsc(
	[2 3 5].collect { :f |
		let t = Impulse(f, 0);
		let n = Dseq(Infinity, [60 63 67 69]);
		Demand(t, 0, n).MidiCps
	},
	0
).Splay * 0.1

# Annotation

...
