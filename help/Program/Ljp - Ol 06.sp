/* spectral harp ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #6 */
let p = SinOsc(1760, 0) * [0.01 0.01];
p + CombC(
	p,
	0.1,
	LfNoise1(0.5) * 0.1 + 0.1,
	-10
)
