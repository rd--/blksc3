(* https://twitter.com/redFrik/status/1084601286488a674304 *)
var b = [2, 5, 1, 6, 3];
var x = PitchShift(LocalIn(2, 0), 1.5, 0.5, 0, 0);
var y = VarSaw(LfSaw(1 / b, 0) > 0 / 4 + 1.25 ^ b * 99, 0, LfSaw(b / 9, 0) % 1);
var z = Hpf(LfSaw(LfSaw(1 / b, 0).rounded + 1/2, 0) > 0, LfSaw(b / 33, 0) * 4 + 8);
var d = MoogFf((y * z).Splay2, LfSaw(1/9, 0) + 2 * 4000, 2, 0);
d <! LocalOut(d)

