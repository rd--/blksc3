(* https://twitter.com/redFrik/status/1454150378241548296 ; f0 *)
var x = 0.001;
var b = [1, 2, 3, 4, 5, 6, 7, 8] / 8;
var z = [
  Rlpf(Impulse(2, 0), Select(LfSaw(x, 0) * 88 % 5, [0, 3, 5, 7, 10] + 51).midiCps, x * 9),
  Rlpf(Impulse(1, b), Select(0 % 5, [0, 3, 5, 7, 10] + 70).midiCps, x * 5),
  Rlpf(Impulse(LfSaw(1 / 9, 0) + 1, b * 3), Select(5 ** LfSaw(b / 9, 0) % 5, [0, 3, 5, 7, 10] + 82).midiCps, x * 3) / 8,
  Rlpf(Impulse(3, 0), Select(LfSaw(x * 2, 0.5) * 88 % 5, [0, 3, 5, 7, 10] + 63).midiCps, x * 7) / 4
];
var o = z.sum.splay;
o + GVerb(o.sum / 9, 50, 3, 0.5, 0.5, 15, 1, 0.7, 0.5, 300)
