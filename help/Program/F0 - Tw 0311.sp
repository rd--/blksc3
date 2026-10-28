/* F0 - Tw 0311 ; https://sccode.org/1-4Qy */
let f = (
	sinOscFb(8, 0) + 3
	<<
	(sinOscFb(3 / 8, 0.9) * (sinOscFb(5, 0) + 1) + 4.2)
) * 9;
let o = sinOscFb(
	f,
	sinOscFb(1 / 32, 0) + sinOscFb(7.9, 1)
);
allpassC(
	o,
	2,
	sinOscFb([3 2] / 999, 0) + 1,
	4
) / 2
