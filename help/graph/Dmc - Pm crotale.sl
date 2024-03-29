{- pm-crotale (dmc) #1.7 ; graph rewrite -}
OverlapTexture({ :tr |
    var midi = TiRand(48, 72, tr);
    var tone = TRand(1, 6, tr);
    var art = TRand(2, 6, tr) * 3;
    var pan = TRand(-1, 1, tr);
    var freq = midi.MidiCps;
    var env = Decay2(tr, 0, art);
    var mod = 5 + (1 / TiRand(2, 6, tr));
    var amp1 = Decay2(tr, 0, art) * TRand(0.1, 0.3, tr);
    var amp2 = Decay2(tr, 0, art * 1.3) * TRand(0.1, 0.5, tr);
    var sig = PmOsc(freq, mod * freq, Decay2(tr, 0, art) * tone, 0);
    EqPan2(sig, pan) * amp1 * amp2
}, 12, 0, 8)
