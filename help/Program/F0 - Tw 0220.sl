/* Tw 0220 (F0) ; http://www.fredrikolofsson.com/f0blog/?q=node/617 */
let c = InFb(1, 0);
let b = BufAlloc(1, 90000).BufClear;
let g = TGrains(
	2,
	SinOsc(3, 0),
	b,
	c + 3,
	2,
	12,
	0,
	0.1,
	4
);
let r = RecordBuf(b, 0, 1, 0, 1, 1, 1, 0, c);
let o = Hpf(SinOsc(99, c * 6) / 9 + g, 9) * 0.25;
o <! r
