/* rukano; apr 22, 2012; re: epic pads */
let freq = { [60, 64, 65, 67].atRandom.midiCps * (LfNoise2(1) * 0.01 + 1) } ! 24;
let gen = LfSaw(freq, 0) * 0.1;
let fmod = LfCub(1 / 12, 0).linLin(-1, 1, 1, MouseX(2, 16, 0, 0.2));
let rqmod = LfNoise2(1 / 8).linLin(-1, 1, 0.1, 1.0);
let snd = Rlpf(gen, freq * fmod, rqmod);
snd.Splay

# Notes

Mouse control.
