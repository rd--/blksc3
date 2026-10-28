/* Feedback racket ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #12d */
let p = { whiteNoise() * 0.02 } ! 2;
p + combC(
	p,
	0.1,
	lfNoise1(10) * 0.08 + 0.08,
	-10000
)

# Annotation

[No. 12(d)](https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html)
