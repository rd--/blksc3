/* 4.X - Naming Schemas */
let t = Impulse(6, 0);
let f = { :x | Demand(t, 0, Dseq(Infinity, x)) };
let m = [60 62 63 58 48 55].f;
let n = [63 60 48 62 55 58].f;
let o = LfSaw([m n].MidiCps, 0) * 0.016;
CombC(
	Decay(t, 1.66) * o,
	0.166, 0.166,
	LfNoise2(0.166) * 1.66 + 1.66
) + o

# Annotation

The _N_ button selects between alternate naming schemas.
Ordinarily the _Symbolic Naming Schema_ is selected.
There is also a _Text Naming Schema_.
