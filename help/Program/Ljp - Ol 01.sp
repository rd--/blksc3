/* Ascension ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #1 */
pan2(
	rlpf(
		pinkNoise(),
		phasor(1, 1:8 / 200, 20, 20000, 20),
		0.05
	).sum,
	0,
	0.1
)

# Annotation

Here `phasor` replaces `Line`, so voices reset at individual intervals.

Eventually all voices reset together and the process restarts.
