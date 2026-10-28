/* Saucer base (Jmcc) #6 ; graph rewrite */
{ :tr |
	let b = tRand(0, 1000, tr);
	let c = tRand(0, 5000, tr);
	let o1 = sinOsc(tRand(0, 20, tr), 0) * b + (1.1 * b);
	let o2 = sinOsc(o1, 0) * c + (1.1 * c);
	let o3 = sinOsc(o2, 0) * 0.1;
	let p = tRand(-1, 1, tr);
	pan2(o3, p, 0.25)
}.overlapTexture(6, 2, 4).mix
