/* https://twitter.com/redFrik/status/1464534258173849611 ; f0 */
let b = [ 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let n = GreyNoise() * SinOsc(1 / b / 99, 0).Max(0);
let f = 62.5 * b;
let c = f * [6, 3, 7, 5, 1, 8, 4, 2, 6, 3, 7, 5, 1];
let x = BBandPass(n, f, SinOsc(0.5, 0) + SinOsc(b / 999, 0) / 99 + 0.1) * (SinOsc(b / 666, 0) + 2);
let y = BBandPass(n, c, 9 ^ SinOsc(b / 333, 0) / 99) * 666 / c;
let z = BBandPass(n, c / 2, 9 ^ SinOsc(b / 222, 0) / 99) * 888 / c;
(x + y + z * SinOsc(0.001, b / 9).Max(0)).Splay2
