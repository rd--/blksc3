/* Noise modulated sines (Jmcc) #6 ; Graph rewrite */
let z = { :tr |
    let f = tRand(60, 100, tr).midiCps;
    sinOsc([f, f + 0.2], 0) * lfNoise2(f * [0.15, 0.16]) * 0.05
}.overlapTexture(4, 4, 4).sum;
combC(z, 0.3, 0.3, 4) + z.reverse
