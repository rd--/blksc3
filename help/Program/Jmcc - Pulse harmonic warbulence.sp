/* pulse harmonic warbulence (jmcc) #12 */
let z = overlapTexture({ :tr |
    let f = tRand(24, 96, tr).midiCps;
    let r = txLine(tExpRand(0.1, 20, tr), tExpRand(0.1, 20, tr), 25.6, tr);
    let n = 12;
    let p = lfPulse(tExpRand(0.2, 1.2, tr), tRand(0.1, 0.2, tr), 0.5);
    1.to(n).collect({ :i |
        let m = (sinOsc(r * tRand(0.9, 1.1, tr), tRand(0, 2.pi, tr)) * 0.1 - 0.05).max(0);
        pan2(sinOsc(f * i + f, 0), tRand(-1, 1, tr), m * (1 / (i + 1)))
    }).sum * p
}, 12.8, 6.4, 6).sum;
{ combC(z, 0.3, { rand(0.1, 0.3) }.duplicate(2), 8) }.duplicate(5).sum * 0.25
