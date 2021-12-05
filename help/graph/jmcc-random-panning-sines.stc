// random panning sines (jmcc) #4
var n = 8;
var f = {
    arg tr;
    {
        Pan2(SinOsc(80 + TRand(0, 2000, tr), 0),
            LFNoise1(0.4 + TRand(0, 0.8, tr)),
            LFNoise1(0.4 + TRand(0, 0.8, tr)) * 0.4 + 0.5)
    }.dup(n).sum * 0.1 / n
};
OverlapTexture(f, 8, 8, 2)
