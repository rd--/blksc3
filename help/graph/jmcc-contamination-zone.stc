// contamination zone ; jmcc #9 ; graph rewrite
var z = OverlapTexture({
    arg tr;
    var f = TExpRand(800, 8000, tr);
    var s = PinkNoise() * (LFNoise1(TRand(0, 3, tr)) * 0.0008 + 0.0022);
    var r = RingzBank(s, { TRand(50, 2000, tr) }.dup(4), [1], { TRand(0.2, 4, tr) }.dup(4)).abs;
    Pan2(
        RLPF(r, SinOsc(TRand(0, 1, tr), 0) * 0.7 * f + f, 0.1),
        LFNoise1(TRand(0, 1, tr)),
        LFPulse(TRand(0, 15, tr), 0, TRand(0.2, 0.4, tr))
    )
}, 8, 3, 4);
6.timesRepeat({ z = AllpassC(z, 0.040, { Rand(0, 0.04) }.dup, 16) });
z * 0.2
