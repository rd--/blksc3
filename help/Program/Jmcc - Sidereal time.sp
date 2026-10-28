/* sidereal time (jmcc) #9 */
var z = overlapTexture({
    arg tr;
    var p = 15;
    var f = txLine(tExpRand(40, 300, tr), tExpRand(40, 300, tr), 12, tr);
    var t = LFPulse(f, tRand(0.1, 0.9, tr), 0) * 0.002 * LFNoise2(tRand(0, 8, tr)).max(0);
    var z = { { ringz(t, tExpRand(100, 6000, tr), tRand(2, 6, tr)) }.dup(p).sum };
    z.dup * 0.1
}, 4, 4, 6);
combC(z, 0.6, rand(0.1, 0.6), 8) + z.reverse
