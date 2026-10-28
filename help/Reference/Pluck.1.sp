/* pluck.2 ; https://scsynth.org/t/what-kind-of-synthesis-is-this/4318/17 (nh) */
let freq = lfNoise2(1);
let trig = impulse(linExp(freq, -1, 1, 1, 100), 0);
let freqs = (60.5 + [0 2 4 5 7 9 10]).midiCps;
let snd = pluck(
	hasher(sweep(trig, 1)) * -10.dbAmp,
	trig,
	freqs.reciprocal,
	freqs.reciprocal,
	0.9,
	0.5
);
snd := leakDc(snd, 0.995).sum;
snd := moogFf(
	snd,
	linExp(lfNoise2(1), -1, 1, 500, 16000),
	0,
	0
);
eqPan2(snd, freq)
