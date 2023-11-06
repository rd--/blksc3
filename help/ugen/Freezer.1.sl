(* Freezer.1 *)
var buf = SfAcquire("crotale-d6", 1, 1);
var n = { :i :j | LinLin(LfNoise2(0.1), -1, 1, i, j) };
Freezer(buf, n.value(0.3, [0.4, 0.5]), n.value(0.5, [0.6, 0.7]), n.value(0.3, [0.6, 0.8]), n.value(0.95, 1.05), n.value(0.05, 0.15), n.value(0.05, 0.15), n.value(0.05, 0.15), 0, 0, 36)
