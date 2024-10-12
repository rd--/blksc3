{- Tw 0051 (F0) - http://sccode.org/1-4Qy -}
let i = Saw([115 117 110 100 97 121]);
let f = Saw(9 / [115 108 111 119]) * 400 + 500;
let w = Saw(7 / [99 111 100 105 110 103]) + 1.1;
let l = BBandPass(i, f, w) / 9;
GVerb(
	l.Splay2,
	10,
	3,
	0.5,
	0.5,
	15,
	1,
	0.7,
	0.5,
	300
).transposed.Sum
