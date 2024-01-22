{- clipped inharmonic warbulence ; jmcc -}
var z = OverlapTexture({ :tr |
    var r = LinExp(LfNoise1(1 / 16), -1, 1, 0.1, 20);
    var f = TRand(24, 96, tr).MidiCps;
    var a = (500 / f).Min(1);
    var n = 12;
    a * (1 .. n).collect({ :i |
        var g = TRand(0, n, tr) + 1;
        var o = (SinOsc(f * g, 0) * (SinOsc(r * TRand(0.9, 1.1, tr), TRand(0, 2 * pi, tr)) * 0.08 - 0.04).Max(0)).Max(0);
        Pan2(o, TRand(-1, 1, tr), 2 / g)
    }).sum;
}, 12.8, 6.4, 6);
z := LeakDc(z, 0.995);
{ CombC(z, 0.3, { Rand(0.1, 0.3) }.dup(2), 20) }.dup(8).sum * 0.2
