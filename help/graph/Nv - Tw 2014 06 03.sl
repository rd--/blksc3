(* https://twitter.com/headcube/status/474064500564324352 (nv) *)
var o = { arg ix; { LFPulse(2 ** IRand(-9, 1), IRand(0, 2) / 2, 0.5) }.dup(ix + 1).product / ix + 1 };
var z = { var f = 1.to(8).collect(o).product * 86; Pluck(BPF(f, f, 1).sin, Saw(440), 1 , 1 / f, 9, 0.5) };
z.dup(9).splay * 0.2
