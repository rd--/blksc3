{- harmonic tumbling (jmcc) #1 -}
var t = TxLine([10, 11], 0.1, 60, 1);
var o = {
    arg h;
    var e = Decay2(Dust(t) * 0.02, 0.005, Rand(0, 0.5));
    SinOsc(80 * (h + 1), 0) * e
};
0.to(10).collect(o).sum

