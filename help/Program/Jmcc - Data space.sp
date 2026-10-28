/* data space (jmcc) #2 ; graph rewrite */
overlapTexture({
    arg tr;
    var dt = tRand(0, 0.25, tr) + 0.1;
    var osc = {
        arg p;
        var n = p.first;
        var m = p.second;
        var e = LFPulse(tRand(0, m, tr), 0, tRand(0, 1, tr)) * tRand(0, 8000, tr) + tRand(0, 2000, tr);
        LFPulse(tRand(0, n, tr), 0, tRand(0, 1, tr)) * e
    };
    var freq = osc.value([200, 40]) + osc.value([20, 4]) + osc.value([20, 4]);
    combL(pan2(LFPulse(freq, 0, 0.5), LFNoise0(tRand(0, 3, tr)) * 0.8, 0.04), dt, dt, 3)
}, 6, 1, 4)
