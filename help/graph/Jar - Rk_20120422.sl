{- rukano; apr 22, 2012; re: epic pads -}
var freq = { [60, 64, 65, 67].choose.midiCps * (LfNoise2(1) * 0.01 + 1) }.dup(24);
var gen = LfSaw(freq, 0) * 0.1;
var fmod = LinLin(LfCub(1/12, 0), -1, 1, 1, MouseX(2, 16, 0, 0.2));
var rqmod = LinLin(LfNoise2(1/8), -1, 1, 0.1, 1.0);
var snd = Rlpf(gen, freq * fmod, rqmod);
snd.Splay2

{- ---- notes.md ---- -}
Mouse control.
