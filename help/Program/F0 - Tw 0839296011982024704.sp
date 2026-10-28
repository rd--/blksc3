/* https://twitter.com/redFrik/status/839296011982024704 */
let t = lfSaw([0.5, 0.6], 0);
let f = lfSaw(5, 0) * lfSaw(0.015, 0) + 1 * 98;
let m = (2 ^ lfSaw(4, 0)).round(0.5) * 99;
let i = 2 ^ lfSaw(1 / [8, 9], 0) * 8;
let g = grainFm(1, t, 16, f, m, i, 0, -1, 512);
(g / 2).tanh * 0.25
