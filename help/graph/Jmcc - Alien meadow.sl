{- alien meadow (jmcc) #6 -}
{ :tr |
    let z = TRand(0, 5000, tr);
    let f = SinOsc(TRand(0, 20, tr), 0) * (0.1 * z) + z;
    let a = SinOsc(TRand(0, 20, tr), 0) * 0.05 + 0.05;
    Pan2(SinOsc(f, 0), TRand(-1, 1, tr), a)
}.OverlapTexture(6, 2, 6).sum
