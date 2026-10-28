/* Feedback racket ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #12a */
let p = saw(440 + [0, 0.2]) * 0.02;
p + combC(
	p,
	0.1,
	lfNoise0(10) * 0.08 + 0.08,
	-10000
)
