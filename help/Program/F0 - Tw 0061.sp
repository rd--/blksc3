/* https://fredrikolofsson.com/f0blog/more-sc-twitter/, f0 */
let t = saw([9, 9.01]);
let f = demand(
	t,
	0,
	dseq(Infinity, [0, 0, 0, 0, 0, 0, 500])
);
let m = lag(
	demand(
		t,
		0,
		dshuf(Infinity, 0.to(7) * 99)
	),
	0.04
);
let p = sinOsc(m, 0);
sinOsc(f, p) / 2
