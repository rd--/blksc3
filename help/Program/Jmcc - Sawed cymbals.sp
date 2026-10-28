/* sawed cymbals (jmcc) ; #9 ; graph rewrite */
var p = 15;
overlapTexture({
    arg tr;
    var f1 = tRand(500, 2500, tr);
    var f2 = tRand(0, 8000, tr);
    var s = LFSaw(txLine(tRand(0, 600, tr), tRand(0, 600, tr), 12, tr), 0) * 0.0005;
    { ringzBank(s, { f1 + tRand(0, f2, tr)}.dup(p), nil, { tRand(2, 6, tr) }.dup(p)) }.dup * 0.1;
}, 4, 4, 6)
