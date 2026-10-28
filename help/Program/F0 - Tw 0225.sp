/* Tw 0225 (F0) ; http://www.fredrikolofsson.com/f0blog/?q=node/617 */
let b = 1:8 * 99;
let o = blip(
	b / 2 + (lfSaw(-8 / b, 1) * 99),
	b / 4 + (lfSaw(1 / b, 1) * 99)
);
let s = sinOsc(
	8 / b,
	lfSaw(99 / b, 0)
) * o;
let c = combN(s, 0.2, 0.2, 1);
c.splay2.sin * 0.5
