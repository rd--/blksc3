/* rukano; apr 22, 2012; re: epic pads */
let freq = { [60, 64, 65, 67].atRandom.midiCps * (lfNoise2(1) * 0.01 + 1) } ! 24;
let gen = lfSaw(freq, 0) * 0.1;
let fmod = lfCub(1 / 12, 0).linLin(-1, 1, 1, mouseX(2, 16, 0, 0.2));
let rqmod = lfNoise2(1 / 8).linLin(-1, 1, 0.1, 1.0);
let snd = rlpf(gen, freq * fmod, rqmod);
snd.splay

# Notes

Mouse control.
