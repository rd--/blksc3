(* dark sea horns (jl) *)
var x = LocalIn(2, 0);
var a = (SinOsc(65, x * LfNoise1(0.1) * 3) * LfNoise1(3) * 6).Tanh;
9.timesRepeat({ a := AllpassL(a, 0.3, { Rand(0, 0.2) + 0.1 }.dup(2), 5) });
a := a.Tanh;
(a * 0.1).mrg(LocalOut(a))
