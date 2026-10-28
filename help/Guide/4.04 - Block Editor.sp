/* 4.X - Block Editor */
rlpf(
	whiteNoise() * 0.1,
	lfGauss(
		[3.3 6.6],
		0.33,
		0, 1, 0
	) * 333 + 666,
	0.22
)

# Annotation

The block editor has two parts,
a _Workspace_ where drawings are constructed,
and a _Toolbox_ from which the elements of the drawings are taken.
