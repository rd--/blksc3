/* F0 <https://twitter.com/redFrik/status/1453520892374441986> */
let b = [1 2 3] / 3;
let c = 2.pi * b;
let t = SinOsc(10, b.pi);
let x = SinOsc(b, 0) > 0 * SinOsc(b * 50, 0) + 1 / 2 * (300 ^ SinOsc(1 / 32, c) + 99) + (SinOsc(1 / 256, c).RoundTo(1) * 50 + 99);
let f = Latch(x, t % SinOsc(99 ^ SinOsc(1 / 64, 0), 0));
let y = SinOsc(SinOsc(1 / 16, 0) * 3 + 12, 0) + 1 / 2 * (SinOsc(1 / 8, c) * 50 + 51);
let h = Latch(y, t * SinOsc(1 / 4, 0));
let o = Blip(f, h).Splay2 / 3;
o + GVerb(o.Sum / 3 / 3, 30, 3, 0.5, 0.5, 15, 1, 0.7, 0.5, 300)
