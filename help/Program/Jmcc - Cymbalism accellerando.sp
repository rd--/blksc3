/* cymbalism accellerando ; jmcc #2 ; graph rewrite */
var p = 15;
overlapTexture({
    arg tr;
    var i = impulse(txLine(tRand(0, 4, tr) + 0.5, tRand(0, 35, tr) + 0.5, 12, tr), 0);
    var s = decay(i, 0.004) * whiteNoise() * 0.03;
    var f1 = tRand(500, 2500, tr);
    var f2 = tRand(0, 8000, tr);
    { { ringz(s, f1 + tRand(0, f2, tr), tRand(1, 5, tr)) }.dup(p).sum }.dup
}, 4, 4, 3) * 0.1
