/* User Programs */
overlapTexture({ :tr |
	{
		vosim(
			impulse(110 + tRand(-1, 1, tr), 0),
			tExpRand(110, 880, tr),
			tChoose(tr, [3, 5, 7]),
			tChoose(tr, [0.77, 0.88, 0.99])
		)
	} ! 2
}, 3, 5, 3).mix * 0.1

# User Progams

Programs can also be stored in the _local storage_ area of the web browser using the _Save_ button.

This associates a name with the stored program text.
The name is the current date and time in _ISO 8601_ format, for instance _2022-12-04T16:32:14Z_.

The _User_ menu lists all of the stored user programs, and these can be recalled by selecting them.

Note that in this simple system recalling a saved program _replaces_ the existing program, which is deleted and cannot be recovered.

This program makes a simple texture of overlapping ⋐ (_Vosim_) signals.
