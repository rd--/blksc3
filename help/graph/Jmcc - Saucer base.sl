{- saucer base (jmcc) #6 ; graph rewrite -}
{ :tr |
	let b = TRand(0, 1000, tr);
	let c = TRand(0, 5000, tr);
	let o1 = SinOsc(TRand(0, 20, tr), 0) * b + (1.1 * b);
	let o2 = SinOsc(o1, 0) * c + (1.1 * c);
	let o3 = SinOsc(o2, 0) * 0.1;
	Pan2(o3, TRand(-1, 1, tr), 0.25)
}.OverlapTexture(6, 2, 4).sum
