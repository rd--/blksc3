(* blips 001 (jmcc) #SC3d1.5 ; graph rewrite *)
var z = OverlapTexture({ :tr |
    var blips = {
        var f = TrXLine(tr, TrExpRand(tr, 0.25, 400), TrExpRand(tr, 0.25, 400), 4);
        var nh = TrXLine(tr, TrExpRand(tr, 2, 100), TrExpRand(tr, 2, 100), 4);
        Blip(f, nh)
    };
    Pan2(blips.value * blips.value, TrLine(tr, TrRand(tr, -1, 1), TrRand(tr, -1, 1), 4), 0.1)
}, 2, 1, 12);
z := z.Distort;
6.timesRepeat {
	z := AllpassC(z, 0.05, { Rand(0, 0.05) } ! 2, 4)
};
z
