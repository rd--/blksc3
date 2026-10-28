/* Spectral harp (Ljp) No.6 ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html */
let p = sinOsc(
	1760,
	0
) * [0.01 0.01];
combC(
	p,
	0.1,
	lfNoise1(0.5) * 0.1 + 0.1,
	-10
) + p
