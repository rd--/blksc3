/* https://twitter.com/redFrik/status/1452954849885163525 ; F0 ; reset (rd) */
let r = impulse(1 / 9, 0);
let i = tRand(1, 64, r);
let x = (sinOsc(i % 9.33, 0) * 5 + 5).ceiling;
let t = sinOsc(2 ^ (i % 11) * 150 / x, 0);
let y = hpz1(x).abs > 0;
let f = linExp(t, -1, 1, latch(linExp(sinOsc(i % 4.4, 0), -1, 1, 9, 999), y), latch(linExp(sinOsc(i % 1.pi, 0), -1, 1, 99, 9000), y));
pan2(blip(f, t + 2) * (1 - t), sinOsc(0.1, i), tLine(0.2, 0, 9, r).min(0.6) ^ 2)
