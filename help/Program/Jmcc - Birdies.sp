/* birdies (jmcc) #6 ; graph rewrite */
overlapTexture({ :tr |
    let p1 = lfPulse(tRand(0.4, 1.4, tr), 0, tRand(0.1, 0.9, tr)) * tRand(4, 7, tr);
    let p2 = lfPulse(tRand(0.2, 0.7, tr), 0, 0.4) * 0.02;
    let sw = lfSaw(p1 + 2, 0) * tRand(1000, 1800, tr).negate + 4000 + tRand(-1200, 1200, tr);
    let freq = lag(sw, 0.05);
    let amp = lag(p2, 0.3);
    pan2(sinOsc(freq, 0), tRand(-1, 1, tr), amp)
}, 7, 4, 4).sum
