// repeating inharmonic klank ; jmcc #6 ; graph rewrite
var n = 4;
var p = 8;
OverlapTexture({
    arg tr;
    var s = Decay(Dust(0.8) * 0.004, 3.4) * LFSaw(TRand(0, 40, tr), 0);
    { RingzBank(s, { TRand(80, 10000, tr) }.dup(p), [1], { TRand(0.4, 4.4, tr) }.dup(p)) }.dup
}, 8, 8, n);
