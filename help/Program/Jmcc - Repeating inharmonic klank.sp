/* repeating inharmonic klank ; jmcc #6 ; graph rewrite */
let n = 4;
let p = 8;
overlapTexture({ :tr |
    let s = decay(dust(0.8) * 0.004, 3.4) * lfSaw(tRand(0, 40, tr), 0);
    { ringzBank(s, { tRand(80, 10000, tr) }.duplicate(p), [1], { tRand(0.4, 4.4, tr) }.duplicate(p)) }.duplicate(2)
}, 8, 8, n).sum
