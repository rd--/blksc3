{- Tw 0030 (F0) ; http://www.fredrikolofsson.com/f0blog/?q=node/537 -}
let r = LfPar([0.05, 0.04], 0) * 50 + 160;
let f = LfPar(1, 0) * 5 + r.RoundTo(50);
let w = LfPar(0.2, 0) * 0.5 + (LfPar(3, 0) * 0.2 + 0.5);
let o = VarSaw(f, 0, w) / 8;
GVerb(
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
).transposed.Sum * 0.1
