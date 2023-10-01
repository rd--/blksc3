(* sidereal time (jmcc) #9 *)
var z = OverlapTexture({
    arg tr;
    var p = 15;
    var f = TxLine(TExpRand(40, 300, tr), TExpRand(40, 300, tr), 12, tr);
    var t = LFPulse(f, TRand(0.1, 0.9, tr), 0) * 0.002 * LFNoise2(TRand(0, 8, tr)).max(0);
    var z = { { Ringz(t, TExpRand(100, 6000, tr), TRand(2, 6, tr)) }.dup(p).sum };
    z.dup * 0.1
}, 4, 4, 6);
CombC(z, 0.6, Rand(0.1, 0.6), 8) + z.reverse
