/* https://twitter.com/redFrik/status/1452599226882535431 f0 */
let e = LfSaw(0.1, 0);
let b = [1 2 3 4] / 2;
let f = [0 1];
let d = LinExp(LfSaw(11, f), -1, 1, 2 ^ LfSaw(0.061, f) * 4 - 1, 2 ^ LfSaw(0.031, f) * 20 - 8);
let x = LfSaw(LfSaw(0.001, b).Round(LfSaw(0.071, 0) > 0 / 8) * 5, 0);
let y = LinExp(x, -1, 1, Latch(2 ^ LfSaw(0.041, f) * 120 - 59, e), Latch(2 ^ LfSaw(0.051, 0) * 500, e));
let o = Blip(y, d) / d.Max(1);
Hpf(o.Splay, 9)
