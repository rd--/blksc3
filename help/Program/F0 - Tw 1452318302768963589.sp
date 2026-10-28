/* F0 <https://twitter.com/redFrik/status/1452318302768963589> */
let b = 2.pi * [4 3 1 2 5] / 5;
let m = 2 ^ sinOsc(1 / 50, b) * 99;
let c = m.round(50);
let t = b / 2.pi + sinOsc(b / 50, sinOsc(sinOsc(1 / 99, 1.pi).max(0), 0) ^ 2.pi).max(0);
let f = sinOsc(b / 9, b) / 3 + c;
let h = combC(c / 50, 2, t, 5);
let a = 50 / m * sinOsc(b / 50, 0).max(0) + 0.5;
let z = blip(f, h) * a;
let o = hpf(z.splay2 * 1.5, 15).tanh;
o + gVerb(o.sum / 2 * Line(0, 1, 1), 50, 3, 0.5, 0.5, 15, 1, 0.7, 0.5, 300) / 5
