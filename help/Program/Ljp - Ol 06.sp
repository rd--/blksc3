/* Spectral harp (Ljp) No.6 ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html */
let p = SinOsc(
	1760,
	0
) * [0.01 0.01];
CombC(
	p,
	0.1,
	LfNoise1(0.5) * 0.1 + 0.1,
	-10
) + p
