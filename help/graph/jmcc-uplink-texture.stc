// uplink (jmcc) #2 ; graph rewrite
OverlapTexture({
    arg tr;
    var osc = {
        var e = LFPulse(TRand(0, 4, tr), 0, TRand(0, 1, tr)) * TRand(0, 8000, tr) + TRand(0, 2000, tr);
        LFPulse(TRand(0, 20, tr), 0, TRand(0, 1, tr)) * e
    };
    Pan2(LFPulse(osc.dup.sum, 0, 0.5) * 0.04, TRand(0, 0.8, tr), 1)
}, 4, 1, 5)
