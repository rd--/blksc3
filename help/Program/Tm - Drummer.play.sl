/* Drummer (Tm) */
let tempo = 4;
let n = WhiteNoise();
let tr1 = Impulse(tempo, 0);
let tr2 = PulseDivider(tr1, 4, 2);
let tr4 = PulseDivider(tr1, 4, 0);
let snare = n * Decay2(tr2, 0.005, 0.5);
let bass = SinOsc(60, 0) * Decay2(tr4, 0.005, 0.5);
let hihat = Hpf(n, 10000) * Decay2(tr1, 0.005, 0.5);
Pan2(snare + bass + hihat, 0, 0.1)

