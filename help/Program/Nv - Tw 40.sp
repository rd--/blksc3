/* https://swiki.hfbk-hamburg.de/MusicTechnology/899 (nv) [Line 40] */
let f = { :i |
	rlpf(
		0.6 ^ i * 40 * impulse(2 ^ i / 32, 1 / 2),
		4 ^ lfNoise0(1 / 16) * 300,
		0.005
	).Sin
};
let x = 0.to(8).collect(f:/1).splay;
2.timesRepeat {
	x := freeVerb2(x.first, x.second, 0.1, 1, 1)
};
x
