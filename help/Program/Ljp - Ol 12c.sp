/* Feedback racket ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #12c */
let p = { pinkNoise() * 0.03 } ! 2;
p + combC(
	p,
	0.2,
	lfNoise0(1) * 0.2 + 0.2,
	-10000
)
