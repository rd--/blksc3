(* Seq *)
var tr = Impulse(6, 0);
var n0 = Demand(tr, 0, Seq(inf, [60, 62, 63, 58, 48, 55]));
var n1 = Demand(tr, 0, Seq(inf, [63, 60, 48, 62, 55, 58]));
LfSaw([n0, n1].MidiCps, 0) * 0.05
