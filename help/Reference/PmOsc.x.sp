/* pmOsc.3 ; event control */
let s = Voicer(1, 16, { :e |
    let cps = (e.x * 24 + 42).midiCps;
    let cpsv = cps + (cps * sinOsc(e.y * 4 + 4, 0) * 0.02);
    let mfreq = linLin(lfPulse(1 / 8, 0, 0.5), 0, 1, 1.01, 2.01) * cps;
    let ix = txLine(3, 0.001, 0.2, e.w);
    pmOsc(cpsv, mfreq, ix, 0) * e.z * e.w
}).sum;
xFade2(s, gVerb(bpf(s, 90.midiCps, 1), 50, 5, 0.5, 0.5, 15, 0, 0.7, 0.5, 300), 0.2, 1)
