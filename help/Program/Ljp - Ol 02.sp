/* Nostalgic sci-fi music (Lpj, No.2) ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html */
CombC(
	SinOsc(
		LfNoise2(
			1 # 4 * 0.1
		) * 440 + ([1 2] * 440),
		0
	).Sum * 0.01,
	0.2,
	[0.13 0.2],
	15
)

# Annotation

␊⍰₂ _threads over_ the four item list at the ν input,
so that there are four noise generators,
and then ∿ threads over these so that there are four sine oscillators,
which Σ mixes to one channel.
ᚊ threads over the two item list at the ⎵ input.
