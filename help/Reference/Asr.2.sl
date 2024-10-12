{- Asr ; Event control -}
let f = { :e |
    Blip(
	    e.p.UnitCps,
	    e.i * 5
    ) * Asr(
	    e.w,
	    0.5 * e.y,
	    e.y * 4,
	    -4
    )
};
Splay2(Voicer(1, 16, f:/1)) * 0.1
