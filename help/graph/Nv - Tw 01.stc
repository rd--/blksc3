// http://sccode.org/1-V (nv) L1
var a = { PinkNoise() }.dup;
var o = {
 var f = LinExp(LFNoise1(Rand(0, 0.05)), -1, 1, 40, 15000);
 a = BBandStop(a, f, ExpRand(0.1, 2)) };
50.timesRepeat(o);
LPF(a, 100000)
