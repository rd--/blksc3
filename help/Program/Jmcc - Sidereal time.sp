/* sidereal time (jmcc) #9 */
let z = overlapTexture({ :tr |
    let p = 15;
    let f = txLine(tExpRand(40, 300, tr), tExpRand(40, 300, tr), 12, tr);
    let t = lfPulse(f, tRand(0.1, 0.9, tr), 0) * 0.002 * lfNoise2(tRand(0, 8, tr)).max(0);
    { { ringz(t, tExpRand(100, 6000, tr), tRand(2, 6, tr)) }.duplicate(p).sum }.duplicate(2) * 0.1
}, 4, 4, 6).sum;
combC(z, 0.6, rand(0.1, 0.6), 8) + z.reverse
