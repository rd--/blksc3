/* https://fredrikolofsson.com/f0blog/more-sc-twitter/, f0 */
let t = Saw([9, 9.01]);
let f = Demand(
	t,
	0,
	Dseq(inf, [0, 0, 0, 0, 0, 0, 500])
);
let m = Lag(
	Demand(
		t,
		0,
		Dshuf(inf, 0.to(7) * 99)
	),
	0.04
);
let p = SinOsc(m, 0);
SinOsc(f, p) / 2
