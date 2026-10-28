/* https://sccode.org/1-4Qy ; F0 ; 0297 */
(0 .. 3).collect { :i |
	let c = (
		sinOscFb(i + 1 / [6, 4], 0)
		/
		(sinOscFb(1 / [8, 9], 0) + 1.5)
	);
	let d = c % delayN(c, 0.2, 0.2);
	(
		sinOscFb(1 + c ^ i + i * 99, d)
		*
		lag3(d, c % 1 / 99)
	)
}.splay2.transpose.sum / 3
