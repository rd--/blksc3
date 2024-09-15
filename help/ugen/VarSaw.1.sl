{- VarSaw.1.sl -}
let d = LinLin(LfNoise2(0.1), -1, 1, 0.05, 0.5);
let t = Impulse(1 / d, 0);
let w0 = TRand(0, 0.35, t);
let w1 = TRand(0.65, 1, t);
let w = Phasor(t, (w1 - w0) / SampleRate(), w0, w1, 0);
let o = VarSaw(TRand(36, 72, t).MidiCps, 0, w) * Decay2(t, 0.1, d);
Pan2(o, TRand(-1, 1, t), 0.1)

{- ---- notes.md ---- -}
# VarSaw

Per-note width modulation.
