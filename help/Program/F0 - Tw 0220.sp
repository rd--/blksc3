/* Tw 0220 (F0) ; http://www.fredrikolofsson.com/f0blog/?q=node/617 */
let c = inFb(1, 0);
let b = bufAlloc(1, 90000).bufClear;
let g = tGrains(
	2,
	sinOsc(3, 0),
	b,
	c + 3,
	2,
	12,
	0,
	0.1,
	4
);
let r = recordBuf(b, 0, 1, 0, 1, 1, 1, 0, c);
let o = hpf(sinOsc(99, c * 6) / 9 + g, 9) * 0.25;
o <! r
