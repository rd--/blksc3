{- cfstring1 (jmcc) ; graph rewrite ; http://www.iamas.ac.jp/~aka/dspss2004/materials/ -}
var nc = 2;
OverlapTexture({
    arg tr;
    var dgr = DegreeToKey([0, 2, 4, 5, 7, 9, 11].asLocalBuf, TRand(0, 12, tr), 12);
    var freq = (60 + dgr).midiCps;
    var pan = TRand(-0.25, 0.25, tr);
    var amp = TRand(0.1, 0.2, tr);
    var fc = LinExp(LFNoise1(TRand(0.25, 0.4, tr)), -1, 1, 500, 2000);
    var osc = { LFSaw(freq * [TRand(0.99, 1.01, tr), TRand(0.99, 1.01, tr)], 0) * amp }.dup(8).sum.Distort * 0.2;
    var eg = Decay2(tr, 0.5, 1);
    var out = eg * RLPF(osc, fc, 0.1);
    PanAz(nc, out, [pan, pan + 0.3], 1, 2, 0.5).sum
}, 2, 0, 10)
