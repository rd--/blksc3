/* https://twitter.com/redFrik/status/1452599226882535431 f0 */
let e = lfSaw(0.1, 0);
let b = [1 2 3 4] / 2;
let f = [0 1];
let d = linExp(lfSaw(11, f), -1, 1, 2 ^ lfSaw(0.061, f) * 4 - 1, 2 ^ lfSaw(0.031, f) * 20 - 8);
let x = lfSaw(lfSaw(0.001, b).round(lfSaw(0.071, 0) > 0 / 8) * 5, 0);
let y = linExp(x, -1, 1, latch(2 ^ lfSaw(0.041, f) * 120 - 59, e), latch(2 ^ lfSaw(0.051, 0) * 500, e));
let o = blip(y, d) / d.max(1);
hpf(o.splay, 9)
