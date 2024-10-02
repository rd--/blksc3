{- tw 0033 (f0) - http://www.fredrikolofsson.com/f0blog/?q=node/537 -}
let f = LfPar(1 / 14, 0).RoundTo(1) * 20 + 80;
let a = Pulse([1, 2, 3, 4], 0.35);
let n = BrownNoise() * a;
let z = { :i |
	[i + 1 * f, i * f + i + 0.333]
};
let o = LfPar(1.to(4).collect(z:/1), 0);
((o > n) / 3).Splay.Sum * 0.1
