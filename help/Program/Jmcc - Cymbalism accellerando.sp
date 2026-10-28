/* cymbalism accellerando ; jmcc #2 ; graph rewrite */
let p = 15;
overlapTexture({ :tr |
    let i = impulse(txLine(tRand(0, 4, tr) + 0.5, tRand(0, 35, tr) + 0.5, 12, tr), 0);
    let s = decay(i, 0.004) * whiteNoise() * 0.03;
    let f1 = tRand(500, 2500, tr);
    let f2 = tRand(0, 8000, tr);
    { { ringz(s, f1 + tRand(0, f2, tr), tRand(1, 5, tr)) }.duplicate(p).sum }.duplicate(2)
}, 4, 4, 3).sum * 0.1
