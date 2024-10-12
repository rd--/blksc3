{- fast lfos with slow beats (jmcc) -}
OverlapTexture({
    arg tr;
    var a0 = TRand(40, 240, tr);
    var a1 = a0 + TRand(-1, 1, tr);
    var a = [a0, a1];
    var b = TRand(0, 2000, tr);
    var c = a + { TRand(-1, 1, tr) }.dup;
    SinOsc(SinOsc(a, 0) * TRand(0, 1, tr) * b + b, 0) * (SinOsc(c, 0) * 0.05 + 0.05)
}, 8, 4, 4) * 0.25
