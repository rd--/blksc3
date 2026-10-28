/* jmcc ; choip choip choip */
var dur = 12;
var z = overlapTexture({
    arg tr;
    var i = impulse(txLine(tExpRand(1, 30, tr), tExpRand(1, 30, tr), dur, tr), 0);
    var f = txLine(tExpRand(600.0, 8000.0, tr), tExpRand(600.0, 8000.0, tr), dur, tr);
    var o = sinOsc(decay2(i, 0.05, 0.5) * -0.9 * f + f, 0);
    var l = txLine(tExpRand(0.01, 0.5, tr), tExpRand(0.01, 0.5, tr), dur, tr);
    var s = decay2(i * l, 0.01, 0.2) * o;
    pan2(s, tLine(tRand(-1, 1, tr), tRand(-1, 1, tr), dur, tr), 1)
}, dur - 2, 1, 8);
4.timesRepeat({ z = allpassC(z, 0.1, { rand(0, 0.05) }.dup, 4) });
z
