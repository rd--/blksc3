/* asr ; Event control */
let f = { :e |
    blip(
	    e.p.UnitCps,
	    e.i * 5
    ) * asr(
	    e.w,
	    0.5 * e.y,
	    e.y * 4,
	    -4
    )
};
splay2(Voicer(1, 16, f:/1)) * 0.1
