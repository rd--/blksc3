/* Fey emissions ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #9 */
let d = { Dust(2) } ! 2;
CombC(
	Bpf(
		d,
		LfNoise0(10) * 3000 + 3040,
		0.001
	) * 200,
	0.2,
	0.2,
	5
)
