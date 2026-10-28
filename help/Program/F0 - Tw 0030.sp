/* Tw 0030 (F0) ; http://www.fredrikolofsson.com/f0blog/?q=node/537 */
let r = lfPar([0.05, 0.04], 0) * 50 + 160;
let f = lfPar(1, 0) * 5 + r.round(50);
let w = lfPar(0.2, 0) * 0.5 + (lfPar(3, 0) * 0.2 + 0.5);
let o = varSaw(f, 0, w) / 8;
gVerb(
	o,
	80,
	3,
	0.5,
	0.5,
	15,
	1,
	0.7,
	0.5,
	300
).transpose.sum * 0.1
