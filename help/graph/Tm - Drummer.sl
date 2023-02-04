// drummer (tm)
var tempo = 4;
var n = WhiteNoise();
var tr1 = Impulse(tempo, 0);
var tr2 = PulseDivider(tr1, 4, 2);
var tr4 = PulseDivider(tr1, 4, 0);
var snare = n * Decay2(tr2, 0.005, 0.5);
var bass = SinOsc(60, 0) * Decay2(tr4, 0.005, 0.5);
var hihat = HPF(n, 10000) * Decay2(tr1, 0.005, 0.5);
Pan2(snare + bass + hihat, 0, 0.1)

