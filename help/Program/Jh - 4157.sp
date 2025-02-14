/* jh ; https://scsynth.org/t/auditory-illusion-with-exponentially-spaced-frequencies/4157 ; rd (edit) */
let t = Impulse(0.1, 0);
let sinosc = { :freq |
    (Phasor(t, freq / SampleRate(), 0, 1, 0) * 2.pi).Sin
};
let k = 64; /* Adjust for Udp etc. */
let b = TRand(2, 2.25, t);
let n = TRand(0.002, 0.02, t);
let f0 = TRand(90, 180, t);
let e = Decay2(t, 1, 10) * 0.1;
0.to(k).collect { :i |
	sinosc(f0 * (b ^ (i * n)))
}.Splay2 * e
