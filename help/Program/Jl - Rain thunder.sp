/* rain thunder (jl) ; http://sccode.org/1-e */
let n0 = pinkNoise() * (0.08 + (lfNoise1(0.3) * 0.02));
let d0 = lpf(dust2(lfNoise1(0.2).linLin(-1, 1, 40, 50)), 7000);
let e0 = line(0, 1, 10);
let p0 = (3 * gVerb(hpf(n0 + d0, 400), 250, 100, 0.25, 0.5, 15, 0.3, 0.7, 0.5, 300) * e0).tanh;
let n1 = pinkNoise() * (lfNoise1(3).clip(0, 1) * (lfNoise1(2).clip(0, 1) ^ 1.8));
let f1 = lfNoise1(1).linExp(-1, 1, 100, 2500);
let e1 = line(0, 0.7, 30);
let p1 = gVerb(lpf(10 * hpf(n1,  20), f1).tanh, 270, 30, 0.7, 0.5, 15, 0.5, 0.7, 0.5, 300) * e1;
limiter(p0 + p1, 1, 0.01) * 0.25
