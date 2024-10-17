/* rain thunder (jl) ; http://sccode.org/1-e */
let n0 = PinkNoise() * (0.08 + (LfNoise1(0.3) * 0.02));
let d0 = Lpf(Dust2(LinLin(LfNoise1(0.2), -1, 1, 40, 50)), 7000);
let e0 = Line(0, 1, 10);
let p0 = (3 * GVerb(Hpf(n0 + d0, 400), 250, 100, 0.25, 0.5, 15, 0.3, 0.7, 0.5, 300) * e0).Tanh;
let n1 = PinkNoise() * (Clip(LfNoise1(3), 0, 1) * Clip(LfNoise1(2), 0, 1) ^ 1.8);
let f1 = LinExp(LfNoise1(1), -1, 1, 100, 2500);
let e1 = Line(0, 0.7, 30);
let p1 = GVerb(Lpf(10 * Hpf(n1,  20), f1).Tanh, 270, 30, 0.7, 0.5, 15, 0.5, 0.7, 0.5, 300) * e1;
Limiter(p0 + p1, 1, 0.01) * 0.25
