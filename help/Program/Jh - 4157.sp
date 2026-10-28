/* jh ; https://scsynth.org/t/auditory-illusion-with-exponentially-spaced-frequencies/4157 ; rd (edit) */
let t = impulse(0.1, 0);
let sinosc = { :freq |
    (phasor(t, freq / sampleRate(), 0, 1, 0) * 2.pi).Sin
};
let k = 64; /* Adjust for Udp etc. */
let b = tRand(2, 2.25, t);
let n = tRand(0.002, 0.02, t);
let f0 = tRand(90, 180, t);
let e = decay2(t, 1, 10) * 0.1;
0.to(k).collect { :i |
	sinosc(f0 * (b ^ (i * n)))
}.splay2 * e
