/* F0 - Tw 0283 ; https://sccode.org/1-4Qy */
let b = 1 / 2:6;
let o1 = sinOscFb(
	sinOscFb(b, 1) < b * 500 + 99,
	0
) / 5;
let o2 = sinOscFb(
	999 * b,
	sinOscFb(sinOscFb(b, 1) < 0.1 + 1, 1) % b
);
let o3 = sinOscFb(0.1 - b, 1).min(0);
splay(o1 + (o2 * o3)) / 2
