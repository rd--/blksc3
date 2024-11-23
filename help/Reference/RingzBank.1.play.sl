/* RingzBank.1 */
{
	EqPan2(
		RingzBank(
			Dust(1 / 3) * 0.1,
			{ ExpRand(1000, 10000) } ! 3,
			[1],
			{ Rand(1, 4) } ! 15
		),
		LfTri(Rand(3, 10), 0)
	) * 0.1
} !+ 20

/* ---- notes.md ---- */
# RingzBank

Use of Dust with rising sounds, courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
