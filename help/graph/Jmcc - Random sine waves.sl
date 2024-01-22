{- random sine waves (jmcc) #1 -}
OverlapTexture({ :tr |
    EqPan2(SinOsc(TRand(20, 2000, tr), 0), TRand(-1, 1, tr)) * 0.05
}, 5, 2, 9)
