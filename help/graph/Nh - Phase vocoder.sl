{- phase vocoder (nh) ; https://scsynth.org/t/old-school-vocoders/5198/6 ; warning: AudioIn -}
var src = AudioIn([1]);
var userTr = MouseButton(0, 1, 0.2);
var freq = { TChoose(userTr + Dust(0.5).kr, 60 + [-9, -7, -5, -3, -2, 0, 2, 3, 5, 7, 9, 10]) }.dup(3).midiCps;
var numBands = 32;
var bandFreqs = LinExp(0.to(numBands - 1), 0, numBands - 1, 100, 8000);
var voicedCarrier = Saw(freq);
var isVoiced = Lag(Lag(ZeroCrossing(src).cpsMidi, 0.05) > 5000.cpsMidi, 0.05);
var carrier = SelectX(isVoiced, [voicedCarrier, PinkNoise()]);
var filterQ = TRand(10, 100, Dust(0.5));
var srcAmp = Amplitude(Bpf(src, bandFreqs, 1 / filterQ), 0.01, 0.05);
var snd = Bpf(carrier, bandFreqs, 0.05) * srcAmp;
Pan2(snd.sum, 0, numBands / 4)

{- ---- notes.md ---- -}
Mouse control.

_TChoose_ is complicated in that if the trigger is at audio rate then all of the input signals must also be at audio rate,
hence _kr_ message at _Dust_.
