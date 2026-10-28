/* feedback racket ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #12e */
let p = { dust2(200) * 0.2 } ! 2;
p + combC(
	p,
	0.4,
	lfNoise0(2) * 0.4 + 0.4,
	-10000
)
