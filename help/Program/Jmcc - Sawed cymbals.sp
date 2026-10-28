/* sawed cymbals (jmcc) ; #9 ; graph rewrite */
let p = 15;
overlapTexture({ :tr |
    let f1 = tRand(500, 2500, tr);
    let f2 = tRand(0, 8000, tr);
    let s = lfSaw(txLine(tRand(0, 600, tr), tRand(0, 600, tr), 12, tr), 0) * 0.0005;
    { ringzBank(s, { f1 + tRand(0, f2, tr)}.duplicate(p), nil, { tRand(2, 6, tr) }.duplicate(p)) }.duplicate(2) * 0.1
}, 4, 4, 6).sum
