/* hard sync sawtooth with lfo (jmcc) #6 ; graph-rewrite */
let txt = { :tr |
    let f = (30 + tRand(0, 50, tr)).midiCps;
    syncSaw([f, f + 0.2], sinOsc(0.2, { tRand(0, 2.pi, tr) } ! 2) * 2 * f + (3 * f)) * 0.05
}.overlapTexture(4, 4, 4).mix;
combC(txt, 0.3, 0.3, 4) + txt.reverse
