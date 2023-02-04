;; saucer base (jmcc) #6 ; graph rewrite
OverlapTexture({ :tr |
	var b = TRand(0, 1000, tr);
	var c = TRand(0, 5000, tr);
	var o1 = SinOsc(TRand(0, 20, tr), 0) * b + (1.1 * b);
	var o2 = SinOsc(o1, 0) * c + (1.1 * c);
	var o3 = SinOsc(o2, 0) * 0.1;
	Pan2(o3, TRand(-1, 1, tr), 0.25)
}, 6, 2, 4)
