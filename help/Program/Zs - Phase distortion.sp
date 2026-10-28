/* https://schollz.com/blog/phasedistortion/ (zs) */
voicer(1, 16, { :e |
    let freq = (e.x * 36 + 48).midiCps;
    let amp = e.z;
    let freqBase = freq;
    let freqRes = linLin(sinOsc(rand(0, 0.2), 0), -1, 1, freqBase / 2, freqBase * 2);
    let pdbase = impulse(freqBase, 0);
    let twoPi = 2.pi;
    let pd = phasor(pdbase, twoPi * freqBase / sampleRate(), 0, twoPi, 0);
    let pdres = phasor(pdbase, twoPi * freqRes / sampleRate(), 0, twoPi, 0);
    let pdi = linLin((twoPi - pd).max(0), 0, twoPi, 0, 1);
    let snd = lag(sinOsc(0, pdres) * pdi, 1 / freqBase);
    let env = decay2(trig(e.w, 0.001), 0.005, 10);
    pan2(snd, e.i * 2 - 1, env * amp)
}).sum
