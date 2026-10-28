/* adsr ; event control */
let f = { :e |
    blip(e.p.unitCps, e.i * 5) * adsr(e.w, 0.5 * e.y, e.y * 0.75, 0.65, e.y * 4, -4)
};
splay2(voicer(1, 16, f/1)) * 0.1

# adsr

Event control.
