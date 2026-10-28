/* pulse harmonic warbulence (jmcc) #12 */
var z = overlapTexture({
    arg tr;
    var f = tRand(24, 96, tr).midiCps;
    var r = txLine(tExpRand(0.1, 20, tr), tExpRand(0.1, 20, tr), 25.6, tr);
    var n = 12;
    var p = LFPulse(tExpRand(0.2, 1.2, tr), tRand(0.1, 0.2, tr), 0.5);
    1.to(n).collect({
        arg i;
        var m = (sinOsc(r * tRand(0.9, 1.1, tr), tRand(0, 2 * pi, tr)) * 0.1 - 0.05).max(0);
        pan2(sinOsc(f * i + f, 0), tRand(-1, 1, tr), m * (1 / (i + 1)))
    }).sum * p
}, 12.8, 6.4, 6);
{ combC(z, 0.3, { rand(0.1, 0.3) }.dup, 8) }.dup(5).sum * 0.25
