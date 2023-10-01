(* harmonic swimming (jmcc) #1 *)
var a = 0.02;
var l = Ln(0, 0 - a, 60);
var o = {
    arg h;
    var n = LFNoise1(6 + { Rand(-4, 4) }.dup) * a + l;
    SinOsc(50 * (h + 1), 0) * n.max(0)
};
0.to(20).collect(o).sum
