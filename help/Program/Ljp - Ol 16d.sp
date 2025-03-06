/* Shifty feedback ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #16d */
EqPan2(
	CombC(
		SinOsc(200, 0),
		2,
		LfTri(
			LfSaw(1.pi / 9, 0) * 9 + 9,
			0
		) * 0.1 + 1.9,
		20
	),
	0
) * 0.1

# Annotation

Note initial delay.
