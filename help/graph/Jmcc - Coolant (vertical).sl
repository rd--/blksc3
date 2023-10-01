(* coolant (jmcc) *)
var o = OnePole(BrownNoise() * 0.002, 0.95);
OverlapTexture({ :tr |
	{
		Ringz(o, TRand(40, 2040, tr), 1) * 0.2
	}.dup(10).Splay2
}, 6, 6, 3)

(* ---- notes.md ---- *)
This is a similar graph to the _(texture)_ graph, but drawn differently.
