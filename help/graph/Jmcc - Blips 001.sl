(* blips 001 (jmcc) #SC3d1.5 ; graph rewrite *)
var z = OverlapTexture({ :tr |
    var blips = {
        var f = TxLine(TExpRand(0.25, 400, tr), TExpRand(0.25, 400, tr), 4, tr);
        var nh = TxLine(TExpRand(2, 100, tr), TExpRand(2, 100, tr), 4, tr);
        Blip(f, nh)
    };
    Pan2(blips.value * blips.value, TLine(TRand(-1, 1, tr), TRand(-1, 1, tr), 4, tr), 0.1)
}, 2, 1, 12);
z := z.Distort;
6.timesRepeat({ z := AllpassC(z, 0.05, { Rand(0, 0.05) } ! 2, 4) });
z
