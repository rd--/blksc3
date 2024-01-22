{- VarSaw.1.sl -}
var d = LinLin(LfNoise2(0.1), -1, 1, 0.05, 0.5);
var t = Impulse(1 / d, 0);
var w0 = TRand(0, 0.35, t);
var w1 = TRand(0.65, 1, t);
var w = Phasor(t, (w1 - w0) / SampleRate(), w0, w1, 0);
var o = VarSaw(TRand(36, 72, t).MidiCps, 0, w) * Decay2(t, 0.1, d);
Pan2(o, TRand(-1, 1, t), 0.1)

{- ---- notes.md ---- -}
# VarSaw

Per-note width modulation.
