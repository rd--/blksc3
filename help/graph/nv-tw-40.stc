// https://swiki.hfbk-hamburg.de/MusicTechnology/899 (nv) [Line 40]
var f = {
    arg i;
    RLPF(0.6 ** i * 40 * Impulse(2 ** i / 32, 1 / 2),
        4 ** LFNoise0(1 / 16) * 300,
        0.005).sin
};
var x = 0.to(8).collect(f).splay;
2.timesRepeat({x = FreeVerb2(x.first, x.second, 0.1, 1, 1)});
x
