/* jmcc ; choip choip choip */
let dur = 12;
let z = overlapTexture({ :tr |
    let i = impulse(txLine(tExpRand(1, 30, tr), tExpRand(1, 30, tr), dur, tr), 0);
    let f = txLine(tExpRand(600.0, 8000.0, tr), tExpRand(600.0, 8000.0, tr), dur, tr);
    let o = sinOsc(decay2(i, 0.05, 0.5) * -0.9 * f + f, 0);
    let l = txLine(tExpRand(0.01, 0.5, tr), tExpRand(0.01, 0.5, tr), dur, tr);
    let s = decay2(i * l, 0.01, 0.2) * o;
    pan2(s, tLine(tRand(-1, 1, tr), tRand(-1, 1, tr), dur, tr), 1)
}, dur - 2, 1, 8).sum;
4.timesRepeat({ z := allpassC(z, 0.1, { rand(0, 0.05) }.duplicate(2), 4) });
z
