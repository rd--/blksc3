/* random pulsations (jmcc) #1 ; graph rewrite */
overlapTexture({
    arg tr;
    pan2(
        sinOsc(tRand(0, 2000, tr), 0).amClip(sinOsc(8 + tRand(0, 80, tr), 0)),
        sinOsc(0.3 + tRand(0, 0.5, tr), tRand(0, 2 * pi, tr)) * 0.7,
        0.05
    )
}, 5, 2, 6)
