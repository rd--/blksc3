/* nv https://swiki.hfbk-hamburg.de/MusicTechnology/899 */
let s = localIn(2, 0) * 7.5 + (
	saw([32, 33]) * 0.2
);
let f = 2 ^ lag(
	lfNoise0(4 / 3) * 4,
	0.1
) * 300;
let a = combC(
	bpf(s, f, 0.1).Distort,
	2, 2, 40
);
(a * 0.35) <! localOut(a)

# Annotation

Note initial silence caused by two second delay.
