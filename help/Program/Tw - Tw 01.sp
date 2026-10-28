/* <https://swiki.hfbk-hamburg.de/MusicTechnology/899> (tw ; tim walters) */
let z = 0;
let f = { :i |
    sinOsc(i, sinOsc((i + z) ^ i, 0)
    /
    (decay(impulse((0.5 ^ i) / z, 0), [i, i + 1]) * z))
};
let s = { :k |
    z := k;
    1.to(6).collect(f/1).sum
};
(gVerb(0.to(15).collect(s/1).sum, 1, 3, 0.5, 0.5, 15, 1, 0.7, 0.5, 300) / 512).transpose.sum
