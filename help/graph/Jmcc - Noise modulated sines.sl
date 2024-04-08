{- noise modulated sines (jmcc) #6 ; graph rewrite -}
let z = { :tr |
    let f = TRand(60, 100, tr).MidiCps;
    SinOsc([f, f + 0.2], 0) * LfNoise2(f * [0.15, 0.16]) * 0.05
}.OverlapTexture(4, 4, 4).sum;
CombC(z, 0.3, 0.3, 4) + z.reverse

{- ---- notes.md ---- -}
Graph rewrite.
