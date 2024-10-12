{- jh ; https://scsynth.org/t/auditory-illusion-with-exponentially-spaced-frequencies/4157 ; rd (edit) -}
var t = Impulse(0.1, 0);
var sinosc = {
    arg freq;
    (Phasor(t, freq / SampleRate(), 0, 1, 0) * 2 * pi).sin
};
var k = 160;
var b = TRand(2, 2.25, t);
var n = TRand(0.002, 0.02, t);
var f0 = TRand(90, 180, t);
var e = Decay2(t, 1, 10) * 0.1;
0.to(k).collect({ arg i; sinosc.value(f0 * (b ** (i * n))) }).splay * e

