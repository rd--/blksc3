// wind metals (jmcc) ; graph rewrite
var n = 6;
OverlapTexture({
    arg tr;
    (RingzBank(
        { BrownNoise() }.dup * 0.007 * (LFNoise1(TExpRand(0.125, 0.5, tr)) * 0.75 + 0.25).max(0),
        { TRand(0, TRand(500, 8000, tr), tr) + TExpRand(60, 4000, tr) }.dup(n),
        [1],
        { TRand(0.1, 2, tr) }.dup(n)) * 0.1
    ).SoftClip
}, 5, 2 ,12) * 0.1
