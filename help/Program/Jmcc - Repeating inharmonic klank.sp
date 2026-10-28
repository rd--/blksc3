/* repeating inharmonic klank ; jmcc #6 ; graph rewrite */
var n = 4;
var p = 8;
overlapTexture({
    arg tr;
    var s = decay(dust(0.8) * 0.004, 3.4) * LFSaw(tRand(0, 40, tr), 0);
    { ringzBank(s, { tRand(80, 10000, tr) }.dup(p), [1], { tRand(0.4, 4.4, tr) }.dup(p)) }.dup
}, 8, 8, n);
