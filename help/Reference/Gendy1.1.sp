/* gendy1.1 */
{
	pan2(
		sinOsc(
			gendy1(
				rand(0, 6),
				rand(0, 6),
				sinOsc(0.1, 0) * 0.49 + 0.51,
				sinOsc(0.13, 0) * 0.49 + 0.51,
				rand(130, 160.3),
				rand(130, 160.3),
				sinOsc(0.17, 0) * 0.49 + 0.51,
				sinOsc(0.19, 0) * 0.49 + 0.51,
				12,
				12
			) * 200 + 400,
			0
		),
		rand(-1, 1), 0.1
	)
} !+ 10

# gendy1

Random texture.

