;; https://schollz.com/blog/phasedistortion/ (zs)
Voicer(16, { :e |
    var freq = (e.x * 36 + 48).MidiCps;
    var amp = e.z;
    var freqBase = freq;
    var freqRes = LinLin(SinOsc(Rand(0, 0.2), 0), -1, 1, freqBase / 2, freqBase * 2);
    var pdbase = Impulse(freqBase, 0);
    var twoPi = 2 * pi;
    var pd = Phasor(pdbase, twoPi * freqBase / SampleRate(), 0, twoPi, 0);
    var pdres = Phasor(pdbase, twoPi * freqRes / SampleRate(), 0, twoPi, 0);
    var pdi = LinLin((twoPi - pd).max(0), 0, twoPi, 0, 1);
    var snd = Lag(SinOsc(0, pdres) * pdi, 1 / freqBase);
    var env = Decay2(Trig(e.w, 0.001), 0.005, 10);
    Pan2(snd, e.o * 2 - 1, env * amp)
}).sum

