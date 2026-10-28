/* http://sccode.org/1-4Qy (F0) ; 0301 ; requires=kr */
let b = (0 .. 3).collect { :i |
	duty(
		i + 1 / 9,
		0,
		controlIn(
			1,
			i + 1 % 4
		) + dseq(
			Infinity,
			[1 1 2 3 5 8 13 21]
		) % 9
	).kr
};
combN(
	sinOsc(b * 99, b * 2),
	1,
	1 / 3,
	1
).splay / 2 <! controlOut(0, b)
