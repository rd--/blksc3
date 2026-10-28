/* Spectral harp ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #6 */
let f0 = [9000 7000 6000 5000 4000];
let f1 = [3 2 1 0.75 0.5];
(1 .. f0.size).collect { :index |
    let p = sinOsc(f0[index], 0) * [0.01, 0.01];
    let d = index - 1 * 3;
    delayN(p + combC(p, 0.1, lfNoise1(f1[index]) * 0.1 + 0.1, -10), d, d)
}.sum

# Annotation

Summed instances of same structure with entries delayed in accord with decreasing `sinOsc` frequency.
