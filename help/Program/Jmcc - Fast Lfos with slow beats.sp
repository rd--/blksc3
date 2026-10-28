/* fast lfos with slow beats (jmcc) */
overlapTexture({ :tr |
    let a0 = tRand(40, 240, tr);
    let a1 = a0 + tRand(-1, 1, tr);
    let a = [a0, a1];
    let b = tRand(0, 2000, tr);
    let c = a + { tRand(-1, 1, tr) }.duplicate(2);
    sinOsc(sinOsc(a, 0) * tRand(0, 1, tr) * b + b, 0) * (sinOsc(c, 0) * 0.05 + 0.05)
}, 8, 4, 4).sum * 0.25
