// <https://swiki.hfbk-hamburg.de/MusicTechnology/899> (tw ; tim walters)
var z = 0;
var f = {
    arg i;
    SinOsc(i, SinOsc((i + z) ** i, 0)
    /
    (Decay(Impulse((0.5 ** i) / z, 0), [i, i + 1]) * z))
};
var s = {
    arg k;
    z = k;
    1.to(6).collect(f).sum
};
(GVerb(0.to(15).collect(s).sum, 1, 3, 0.5, 0.5, 15, 1, 0.7, 0.5, 300) / 512).transpose.sum
