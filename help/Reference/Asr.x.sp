/* asr ; Event control */
let f = { :e |
    blip(
	    e.p.unitCps,
	    e.i * 5
    ) * asr(
	    e.w,
	    0.5 * e.y,
	    e.y * 4,
	    -4
    )
};
splay2(voicer(1, 16, f/1)) * 0.1
