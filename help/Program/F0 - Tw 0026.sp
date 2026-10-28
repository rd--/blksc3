/* http://www.fredrikolofsson.com/f0blog/?q=node/537 ; graph rewrite (rd) */
let n1 = [
	0 0 0 0 0 0 0 3 4 6 4 0 3 2 0 0
	0 0 1 6 0 1 0 0 0 0 0 0 4 0 0 3
];
let n2 = [
	1 1 2 0 0 3 3 0 0 3 4 0 1 3 0 0
	0 0 1 0 1 7 0 0 5 6 3 0 4 0 9 0
];
let n = n1 ++ n2;
let b = [0 2 4 5 7 9 11].localBuf;
let t = impulse(4, 0);
let m = degreeToKey(
	b,
	demand(t, 0, dseq(Infinity, n)),
	12
);
let e = decay2(
	t,
	tRand(0.05, 0.15, t),
	tRand(0.15, 0.5, t)
);
{
	combC(
		(
			blip(
				(48 + m + tRand(0, 0.05, t)).midiCps,
				tRand(1, 7, t)
			) * e * 8
		).tanh / 8,
		1,
		1,
		8
	) * tRand(0.05, 0.15, t)
} ! 2
