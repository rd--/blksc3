/* Tw 0033 (F0) - http://www.fredrikolofsson.com/f0blog/?q=node/537 */
let f = lfPar(1 / 14, 0).round(1) * 20 + 80;
let a = pulse([1, 2, 3, 4], 0.35);
let n = brownNoise() * a;
let z = { :i |
	[
		i + 1 * f,
		i * f + i + 0.333
	]
};
let o = lfPar([1 .. 4].collect(z/1), 0);
(o > n / 3).splay2.sum * 0.1
