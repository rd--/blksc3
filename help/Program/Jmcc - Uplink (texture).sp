/* uplink (jmcc) #2 ; graph rewrite */
overlapTexture({
    arg tr;
    var osc = {
        var e = LFPulse(tRand(0, 4, tr), 0, tRand(0, 1, tr)) * tRand(0, 8000, tr) + tRand(0, 2000, tr);
        LFPulse(tRand(0, 20, tr), 0, tRand(0, 1, tr)) * e
    };
    pan2(LFPulse(osc.dup.sum, 0, 0.5) * 0.04, tRand(0, 0.8, tr), 1)
}, 4, 1, 5)
