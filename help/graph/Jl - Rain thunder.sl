// rain thunder (jl) ; http://sccode.org/1-e
var n0 = PinkNoise() * (0.08 + (LFNoise1(0.3) * 0.02));
var d0 = LPF(Dust2(LinLin(LFNoise1(0.2), -1, 1, 40, 50)), 7000);
var e0 = Ln(0, 1, 10);
var p0 = (3 * GVerb(HPF(n0 + d0, 400), 250, 100, 0.25, 0.5, 15, 0.3, 0.7, 0.5, 300) * e0).tanh;
var n1 = PinkNoise() * (Clip(LFNoise1(3), 0, 1) * Clip(LFNoise1(2), 0, 1) ** 1.8);
var f1 = LinExp(LFNoise1(1), -1, 1, 100, 2500);
var e1 = Ln(0, 0.7, 30);
var p1 = GVerb(LPF(10 * HPF(n1,  20), f1).tanh, 270, 30, 0.7, 0.5, 15, 0.5, 0.7, 0.5, 300) * e1;
Limiter(p0 + p1, 1, 0.01) * 0.25
