{- pm-crotale (dmc) #1.7 ; graph rewrite -}
OverlapTexture({ :tr |
    let midi = TiRand(48, 72, tr);
    let tone = TRand(1, 6, tr);
    let art = TRand(2, 6, tr) * 3;
    let pan = TRand(-1, 1, tr);
    let freq = midi.MidiCps;
    let env = Decay2(tr, 0, art);
    let mod = 5 + (1 / TiRand(2, 6, tr));
    let amp1 = Decay2(tr, 0, art) * TRand(0.1, 0.3, tr);
    let amp2 = Decay2(tr, 0, art * 1.3) * TRand(0.1, 0.5, tr);
    let sig = PmOsc(freq, mod * freq, Decay2(tr, 0, art) * tone, 0);
    EqPan2(sig, pan) * amp1 * amp2
}, 12, 0, 8).Mix
