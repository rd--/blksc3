(* why supercollider (jmcc) #0 ; Rand UGens *)
var s = { Resonz(Dust(0.2) * 50,  Rand(200, 3200), 0.003) }.dup(10).sum;
var x = { CombL(DelayC(s, 0.048, 0.048), 0.1, LFNoise1(Rand(0, 0.1)) * 0.04 + 0.05, 15) }.dup(7).sum;
4.timesRepeat({ x = AllpassN(x, 0.050, { Rand(0, 0.050) }.dup, 1) });
s + (x * 0.2)
