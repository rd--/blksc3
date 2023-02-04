// reverberated sine percussion (jmcc) #3
var d = 5;
var s = { Resonz(Dust(2 / d) * 50, 200 + Rand(0, 3000), 0.003) }.dup(d).sum;
var z = DelayC(s, 0.048, 0.048);
var y = CombC(z, 0.1, LFNoise1({ Rand(0, 0.1) }.dup(5)) * 0.04 + 0.05, 15);
var x = y.sum;
4.timesRepeat({ x = AllpassC(x, 0.050, { Rand(0, 0.05) }.dup, 1) });
s + (0.2 * x)
