/* feedback racket ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #12e */
let p = { Dust2(200) * 0.2 } ! 2;
p + CombC(
	p,
	0.4,
	LfNoise0(2) * 0.4 + 0.4,
	-10000
)
