/* ringzBank.1 */
{
	eqPan2(
		ringzBank(
			dust(1 / 3) * 0.1,
			{ expRand(1000, 10000) } ! 3,
			[1],
			{ rand(1, 4) } ! 15
		),
		lfTri(rand(3, 10), 0)
	) * 0.1
} !+ 20

# ringzBank

Use of dust with rising sounds, courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
