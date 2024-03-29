{- tarmac ; jmcc #10 ; graph rewrite -}
var a = [
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
OverlapTexture({
    arg tr;
    var t = Impulse(8, 0);
    var i = Demand(t, 0, Seq(inf, TScramble(tr, TChoose(tr, a)))) * t;
    var d = TRand(0.05, 0.5, tr);
    var z = PinkNoise() * (LfNoise1(TRand(0, 3, tr),) * 0.0008 + 0.0022);
    var s = { Ringz(z, TRand(50, 4000, tr), TRand(0.2, 12, tr)) }.dup(4).sum.max(0) * TChoose(tr, [-1, 1]);
    var f = Rlpf(s, Decay2(t, 0.004, d) * TRand(0, 5000, tr) + TRand(0, 100, tr) + 100, 0.2);
    var e = Decay2(i, 0.004, d);
    Pan2(f, LfNoise1(TRand(0, 1, tr)), e)
}, 12, 3, 6) * 0.2;

{- ---- notes.md ---- -}
_TScramble_ requires _sc3-rdu_.
