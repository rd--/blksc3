{- Tw 0225 (F0) ; http://www.fredrikolofsson.com/f0blog/?q=node/617 -}
let b = 1:8 * 99;
let o = Blip(
	b / 2 + (LfSaw(-8 / b, 1) * 99),
	b / 4 + (LfSaw(1 / b, 1) * 99)
);
let s = SinOsc(8 / b, LfSaw(99 / b, 0));
let c = CombN(o * s, 0.2, 0.2, 1);
c.Splay2.Sin * 0.5
