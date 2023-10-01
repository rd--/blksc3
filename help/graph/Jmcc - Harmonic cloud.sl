(* https://soundcloud.com/soundaspureform/harmonic-cloud-1 jmcc ; roughguess *)
OverlapTexture({
    arg tr;
    var vc = {
        var f = TExpRand(64, 4000, tr).roundTo(64);
        Lpf(Saw(f + { TRand(-1, 1, tr) }.dup), TRand(1, 6, tr) * f) * 0.04
    };
    vc.dup(48).Splay2
}, 0.4, 1, 2).transpose.sum
