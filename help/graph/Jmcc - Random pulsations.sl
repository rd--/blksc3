{- random pulsations (jmcc) #1 ; graph rewrite -}
OverlapTexture({
    arg tr;
    Pan2(
        SinOsc(TRand(0, 2000, tr), 0).AmClip(SinOsc(8 + TRand(0, 80, tr), 0)),
        SinOsc(0.3 + TRand(0, 0.5, tr), TRand(0, 2 * pi, tr)) * 0.7,
        0.05
    )
}, 5, 2, 6)
