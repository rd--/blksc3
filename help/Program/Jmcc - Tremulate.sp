/* Tremulate (Jmcc) ; Graph rewrite */
{ :tr |
	let f = tRand(400, 900, tr);
	let r = [tRand(60, 90, tr)] # 4;
	let o = sinOsc(f * [1 1.2 1.5 1.8], 0);
	let e = (lfNoise2(r) * 0.1).max(0);
	eqPan2(o * e, { rand(-1, 1) } ! 4).sum
}.overlapTexture(2, 0.5, 2).mix.combN(0.1, 0.1, 1)
