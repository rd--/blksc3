/* https://swiki.hfbk-hamburg.de/MusicTechnology/899 (nv) [Line 41] */
let n = { :i |
	bpf(
		{ pinkNoise() } ! 2,
		4 ^ lfNoise2(1.2 ^ i / 16) * 300,
		0.15
	) * (5 ^ lfNoise2(1.9 ^ i / 128) / (i + 8) * 20)
};
1.to(15).collect(n:/1).splay2.transpose.sum
