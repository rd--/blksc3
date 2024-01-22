{- harmonic swimming (jmcc) #1 -}
var a = 0.02;
var l = Ln(0, 0 - a, 60);
var o = { :h |
    var n = LfNoise1(6 + { Rand(-4, 4) }.duplicate) * a + l;
    SinOsc(50 * (h + 1), 0) * n.Max(0)
};
(0 .. 20).collect(o).sum
