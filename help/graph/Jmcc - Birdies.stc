// birdies (jmcc) #6 ; graph rewrite
OverlapTexture({
    arg tr;
    var p1 = LFPulse(TRand(0.4, 1.4, tr), 0, TRand(0.1, 0.9, tr)) * TRand(4, 7, tr);
    var p2 = LFPulse(TRand(0.2, 0.7, tr), 0, 0.4) * 0.02;
    var sw = LFSaw(p1 + 2, 0) * TRand(1000, 1800, tr).negated + 4000 + TRand(-1200, 1200, tr);
    var freq = Lag(sw, 0.05);
    var amp = Lag(p2, 0.3);
    Pan2(SinOsc(freq, 0), TRand(-1, 1, tr), amp)
}, 7, 4, 4)
