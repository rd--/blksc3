{- jmcc - inharmonic warbulence ; graph rewrite -}
var z = OverlapTexture({
    arg tr;
    var f = TRand(24, 96, tr).midiCps;
    var a = (500 / f).min(1);
    var r = TxLine(TExpRand(0.1, 20, tr), TExpRand(0.1, 20, tr), 25.6, tr);
    var n = 12;
    1.to(n).collect({
        arg i;
        var g = TRand(0, n, tr) + 1;
        var m = (SinOsc(r * TRand(0.9, 1.1, tr), TRand(0, 2 * pi, tr)) * 0.08 - 0.04).max(0);
        Pan2(SinOsc(f * g, 0), TRand(-1, 1, tr), m * (2 / g))
    }).sum * 0.1
}, 12.8, 6.4, 6);
{ CombC(z, 0.3, { Rand(0.1, 0.3) }.dup, 8) }.dup(5).sum * 0.3
