// http://sccode.org/1-9 (jl)
var n = 956;
var a = HPF(PinkNoise() * 0.005, 10) * Ln(0, 1, 9);
var f = { arg i; Ringz(a * LFNoise1(0.05 + Rand(0, 0.1)), 55 * (i + n) + 60, 0.2) };
GVerb(1.to(99).collect(f).sum, 70, 990, 0.5, 0.5, 15, 1, 0.7, 0.5, 300).tanh
