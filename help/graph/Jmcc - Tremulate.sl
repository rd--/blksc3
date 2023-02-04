// tremulate (jmcc) ;  graph rewrite
var voiceFunc = {
    arg tr;
    Pan2(
        SinOsc(TRand(400, 900, tr) * [1.0, 1.2, 1.5, 1.8], 0),
        { Rand(-1, 1) }.dup(4),
        (LFNoise2({ TRand(60, 90, tr) }.dup(4)) * 0.1).max(0)
    ).sum };
CombC(OverlapTexture(voiceFunc, 2, 0.5, 2), 0.1, 0.1, 1)
