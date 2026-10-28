/* https://twitter.com/redFrik/status/1454150378241548296 ; f0 */
let x = 0.001;
let b = [1, 2, 3, 4, 5, 6, 7, 8] / 8;
let z = [
  rlpf(
	  impulse(2, 0),
	  selectT(lfSaw(x, 0) * 88 % 5, [0, 3, 5, 7, 10] + 51).midiCps,
	  x * 9
  ),
  rlpf(
	  impulse(1, b),
	  selectT(0 % 5, [0, 3, 5, 7, 10] + 70).midiCps,
	  x * 5
  ),
  rlpf(
	  impulse(lfSaw(1 / 9, 0) + 1, b * 3),
	  selectT(5 ^ lfSaw(b / 9, 0) % 5, [0, 3, 5, 7, 10] + 82).midiCps,
	  x * 3
  ) / 8,
  rlpf(
	  impulse(3, 0),
	  selectT(lfSaw(x * 2, 0.5) * 88 % 5, [0, 3, 5, 7, 10] + 63).midiCps,
	  x * 7
  ) / 4
];
let o = z.sum.splay;
o + gVerb(o.sum / 9, 50, 3, 0.5, 0.5, 15, 1, 0.7, 0.5, 300)
