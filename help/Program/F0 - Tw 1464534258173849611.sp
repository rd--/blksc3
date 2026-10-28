/* https://twitter.com/redFrik/status/1464534258173849611 ; f0 */
let b = [ 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let n = greyNoise() * sinOsc(1 / b / 99, 0).max(0);
let f = 62.5 * b;
let c = f * [6, 3, 7, 5, 1, 8, 4, 2, 6, 3, 7, 5, 1];
let x = bBandPass(n, f, sinOsc(0.5, 0) + sinOsc(b / 999, 0) / 99 + 0.1) * (sinOsc(b / 666, 0) + 2);
let y = bBandPass(n, c, 9 ^ sinOsc(b / 333, 0) / 99) * 666 / c;
let z = bBandPass(n, c / 2, 9 ^ sinOsc(b / 222, 0) / 99) * 888 / c;
(x + y + z * sinOsc(0.001, b / 9).max(0)).splay2
