{- Adsr ; event control -}
let f = { :e |
    Blip(e.p.UnitCps, e.i * 5) * Adsr(e.w, 0.5 * e.y, e.y * 0.75, 0.65, e.y * 4, -4)
};
Splay2(Voicer(1, 16, f:/1)) * 0.1

{- ---- notes.md ---- -}
Event control.
