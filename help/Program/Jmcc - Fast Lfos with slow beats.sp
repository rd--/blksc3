/* fast lfos with slow beats (jmcc) */
overlapTexture({
    arg tr;
    var a0 = tRand(40, 240, tr);
    var a1 = a0 + tRand(-1, 1, tr);
    var a = [a0, a1];
    var b = tRand(0, 2000, tr);
    var c = a + { tRand(-1, 1, tr) }.dup;
    sinOsc(sinOsc(a, 0) * tRand(0, 1, tr) * b + b, 0) * (sinOsc(c, 0) * 0.05 + 0.05)
}, 8, 4, 4) * 0.25
