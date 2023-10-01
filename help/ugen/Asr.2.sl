(* Asr ; event control *)
var f = { :e |
    Blip(e.p.UnitCps, e.i * 5) * Asr(e.w, 0.5 * e.y, e.y * 4, -4)
};
Splay2(Voicer(16, f)) * 0.1
