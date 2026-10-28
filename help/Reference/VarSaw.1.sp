/* varSaw.1.sl */
let d = linLin(lfNoise2(0.1), -1, 1, 0.05, 0.5);
let t = impulse(1 / d, 0);
let w0 = tRand(0, 0.35, t);
let w1 = tRand(0.65, 1, t);
let w = phasor(t, (w1 - w0) / sampleRate(), w0, w1, 0);
let o = varSaw(tRand(36, 72, t).midiCps, 0, w) * decay2(t, 0.1, d);
pan2(o, tRand(-1, 1, t), 0.1)

# varSaw

Per-note width modulation.
