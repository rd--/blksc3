/* pm-crotale (dmc) #1.7 ; graph rewrite */
overlapTexture({ :tr |
    let midi = tiRand(48, 72, tr);
    let tone = tRand(1, 6, tr);
    let art = tRand(2, 6, tr) * 3;
    let pan = tRand(-1, 1, tr);
    let freq = midi.midiCps;
    let env = decay2(tr, 0, art);
    let mod = 5 + (1 / tiRand(2, 6, tr));
    let amp1 = decay2(tr, 0, art) * tRand(0.1, 0.3, tr);
    let amp2 = decay2(tr, 0, art * 1.3) * tRand(0.1, 0.5, tr);
    let sig = pmOsc(freq, mod * freq, decay2(tr, 0, art) * tone, 0);
    eqPan2(sig, pan) * amp1 * amp2
}, 12, 0, 8).mix
