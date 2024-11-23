/* Ascension ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #1 */
Pan2(
	Rlpf(
		PinkNoise(),
		Phasor(1, 1:8 / 200, 20, 20000, 20),
		0.05
	).Sum,
	0,
	0.1
)

/* ---- notes.md ---- */
Here `Phasor` replaces `Line`, so voices reset at individual intervals.

Eventually all voices reset together and the process restarts.
