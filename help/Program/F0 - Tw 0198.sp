/* https://fredrikolofsson.com/f0blog/sapf-sctweets/ 0198 */
let b = (1 .. 5) / 8;
Splay(
	Ringz(
		CombN(
			ClipNoise() * (
				LfSaw(b, 0)
				>
				(LfSaw(0.1, 0) + 0.5)
			),
			1,
			b,
			2
		),
		[261 311 349 391 466],
		1
	)
) / 90
