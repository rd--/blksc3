/* Drummer (Tm) */
let tempo = 4;
let n = whiteNoise();
let tr1 = impulse(tempo, 0);
let tr2 = pulseDivider(tr1, 4, 2);
let tr4 = pulseDivider(tr1, 4, 0);
let snare = n * decay2(tr2, 0.005, 0.5);
let bass = sinOsc(60, 0) * decay2(tr4, 0.005, 0.5);
let hihat = hpf(n, 10000) * decay2(tr1, 0.005, 0.5);
pan2(snare + bass + hihat, 0, 0.1)

