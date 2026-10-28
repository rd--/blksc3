/* phase vocoder (nh) ; https://scsynth.org/t/old-school-vocoders/5198/6 ; warning: audioIn */
let src = audioIn([1]);
let userTr = mouseButton(0, 1, 0.2);
let freq = { tChoose(userTr + dust(0.5).kr, 60 + [-9, -7, -5, -3, -2, 0, 2, 3, 5, 7, 9, 10]) }.duplicate(3).midiCps;
let numBands = 32;
let bandFreqs = linExp([0 .. numBands - 1], 0, numBands - 1, 100, 8000);
let voicedCarrier = saw(freq);
let isVoiced = lag(lag(zeroCrossing(src).cpsMidi, 0.05) > 5000.cpsMidi, 0.05);
let carrier = selectX(isVoiced, [voicedCarrier, pinkNoise()]);
let filterQ = tRand(10, 100, dust(0.5));
let srcAmp = amplitude(bpf(src, bandFreqs, 1 / filterQ), 0.01, 0.05);
let snd = bpf(carrier, bandFreqs, 0.05) * srcAmp;
pan2(snd.sum, 0, numBands / 4)

# Notes

Mouse control.

`tChoose` is complicated in that if the trigger is at audio rate then all of the input signals must also be at audio rate,
hence `kr` message at `dust`.
