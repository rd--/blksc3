/* Hedge trimmer ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #5 */
pan2(
	bpf(
		pinkNoise(),
		1:64 * (lfNoise2(4) * 30 + 100),
		0.01
	).sum,
	0,
	0.6
)
