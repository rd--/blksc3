/* Hedge trimmer ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #5 */
Pan2(
	Bpf(
		PinkNoise(),
		1:64 * (LfNoise2(4) * 30 + 100),
		0.01
	).Sum,
	0,
	0.6
)
