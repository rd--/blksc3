/* Tremulate (Jmcc) ; Graph rewrite */
{ :tr |
	let f = TRand(400, 900, tr);
	let r = TRand(60, 90, tr) # 4;
	let o = SinOsc(f * [1 1.2 1.5 1.8], 0);
	let e = (LfNoise2(r) * 0.1).Max(0);
	EqPan2(o * e, { Rand(-1, 1) } ! 4).Sum
}.OverlapTexture(2, 0.5, 2).Mix.CombN(0.1, 0.1, 1)
