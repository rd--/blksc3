/* Tarmac (Jmcc) #10 ; Graph rewrite ; requires=TScramble */
let a = [
	1 0 0;
	1 1 0;
	1 1 0 0;
	1 1 1 0 0 0;
	1 1 1 0 0 0 0 0;
	1 1 1 1 0 0 0 0;
	1 1 1 1 1 0 0 0;
	1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0
];
{ :tr |
	let t = impulse(8, 0);
	let i = demand(t, 0, dseq(Infinity, tScramble(tr, tChoose(tr, a)))) * t;
	let d = tRand(0.05, 0.5, tr);
	let z = pinkNoise() * (lfNoise1(tRand(0, 3, tr)) * 0.0008 + 0.0022);
	let s = (
		{ ringz(z, tRand(50, 4000, tr), tRand(0.2, 12, tr)) } !+ 4
	).max(0) * Choose(tr, [-1, 1]);
	let f = rlpf(
		s,
		decay2(t, 0.004, d) * tRand(0, 5000, tr) + tRand(0, 100, tr) + 100,
		0.2
	);
	let e = decay2(i, 0.004, d);
	eqPan2(f, lfNoise1(tRand(0, 1, tr))) * e
}.overlapTexture(12, 3, 6).mix * 0.2

# Notes

`tScramble` requires _sc3-rdu_.
