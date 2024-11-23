/* sawed cymbals (jmcc) ; #9 ; graph rewrite */
var p = 15;
OverlapTexture({
    arg tr;
    var f1 = TRand(500, 2500, tr);
    var f2 = TRand(0, 8000, tr);
    var s = LFSaw(TxLine(TRand(0, 600, tr), TRand(0, 600, tr), 12, tr), 0) * 0.0005;
    { RingzBank(s, { f1 + TRand(0, f2, tr)}.dup(p), nil, { TRand(2, 6, tr) }.dup(p)) }.dup * 0.1;
}, 4, 4, 6)
