/* https://github.com/schollz/18000/blob/main/drone/toshiya.scd */
var hz, amp, note, snd, sig, fx, y, z;
hz := 440;
amp := 1.0;
note := hz.cpsMidi;
snd := pan2(sinOsc((note - 12).midiCps, linLin(lfTri(0.5, 0), -1, 1, 0.2, 0.8)) / 12 * amp, sinOsc(0.1, 0) * 0.2, 1);
snd := {
    sig := sinOsc((note + tChoose(impulse(rand(1 / 30, 1 / 5), 0), [0, 9, 4, 14, 5, 2, 17]).kr).midiCps, 0);
    sig := lpf(sig, linExp(sinOsc(rand(1 / 30, 1 / 10), rand(0, 2 * 1.pi)), -1, 1, 20, 12000)) * 2;
    sig := delayC(sig, rand(0.01, 0.03), (lfNoise1(rand(5, 10)) * 0.01 + 0.02) / nRand(10, 20, 3) );
    pan2(sig, lag(lfNoise0(1 / 3), 3), 1) / 12 * amp
} !+ 12 + snd;
snd := MoogLadder(snd.tanh, linExp(lag(lfNoise0(1 / 6), 6), -1, 1, hz * 2, hz * 10), 0);
z := delayC(snd, 0.048, 0.048);
y := { combL(z, 0.1, lfNoise1(rand(0, 0.1)) * 0.04 + 0.05, 15) } !+ 7;
4.timesRepeat({ y := allpassC(y, 0.050, [rand(0, 0.050), rand(0, 0.050)], 1) });
snd := snd + (linLin(lag(lfNoise0(1 / 10), 10), -1, 1, 0.01, 0.06) * y);
snd := snd + [
    Amplitude(snd, 0.01, 0.01),
    linLin(lag(lfNoise0(1 / 1), 1), -1, 1, 0, 1),
    ringzBank({ pinkNoise() * 0.007 } ! 2, [hz, hz * 2 + 23, hz * 4 + 53, hz * 8 + 23], [1, 1, 1, 1], [1, 1, 1, 1])].product;
snd := lpf(snd, 10000);
snd := hpf(snd.tanh, 20);
snd * -10.dbAmp

# Notes

`MoogLadder` requires _sc3-plugins_.
