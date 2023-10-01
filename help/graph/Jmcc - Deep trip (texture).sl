(* deep trip (jmcc) #9 ; graph rewrite *)
OverlapTexture({
    arg tr;
    var f = (LFNoise1(TRand(0, 0.3, tr)) * 60 + 70).midiCps;
    var a = LFNoise2(f * TRand(0, 0.5, tr)) * (LFNoise1(TRand(0, 8, tr)) * SinOsc(TRand(0, 40, tr), 0) * 0.1).max(0);
    var s = Pan2(SinOsc(f, 0) *  a, LFNoise1(TRand(0, 5, tr)), 1);
    var c = { CombC(s, 0.5, { TRand(0, 0.2, tr) + 0.3 }.dup, 20) };
    s + c.dup.sum
}, 12, 4, 4)
