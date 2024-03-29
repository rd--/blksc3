{- bowed string (jmcc) -}
OverlapTexture({
    arg tr;
    var root = 5;
    var scale = #[0, 2, 4, 5, 7, 9, 11] + root;
    var oct = #[24, 36, 48, 60, 72, 84];
    var f0 = (TChoose(tr, scale) + TChoose(tr, oct)).midiCps;
    var freq = 1.to(12).collect({ arg i; f0 * i });
    var a0 = TRand(0.7, 0.9, tr);
    var amp = { a0 = a0 * a0 }.dup(12);
    var x = { BrownNoise() }.dup * 0.007 * (LFNoise1(TExpRand(0.125, 0.5, tr)) * 0.6 + 0.4).max(0);
    var k = RingzBank(x, freq, amp, { TRand(1, 3, tr) }.dup(12));
    (k * 0.1).SoftClip
}, 5, 2, 12)
