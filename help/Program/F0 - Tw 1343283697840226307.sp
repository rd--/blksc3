/* F0 <https://twitter.com/redFrik/status/1343283697840226307> */
let b = 2.to(12) / 12;
let f = [136.1, 163.3, 181.4, 204.1, 244.9, 272.1, 326.5, 362.8, 408.2, 489.8, 544.2];
let z = { whiteNoise() } ! 11 * (lfTri(b, 0) + 1 / 2) + brownNoise();
let t = lfTri(121 ^ lfTri(2 / 121 * b, 0), 0);
let d = lag2(
	lfTri(1 / 212.1, 0) <= (1 / 212),
	2 / b
) / 12 * 1.2 + 1.2 / f;
let c = lfTri(b / 12, 0) + 1 / 2;
let p = pluck(z, t, 2 / 121, d, 1 / 2 * 12 / 1.2, c);
hpf(p, 12).splay / 2.1 / 2
