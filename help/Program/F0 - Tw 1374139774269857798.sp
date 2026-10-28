/* https://twitter.com/redFrik/status/1374139774269857798 ; f0 */
let b = [1, 0.5, 1.25];
let c = sinOscFb(3, 0) > 0;
let x = sinOscFb(sinOscFb(1 / 64, 0) < 0 * 9 + 50, sinOscFb(1 / 8, 0) + 1 / 2) * hpf(c, 4) * 5;
let f0 = lag3Ud(demand(sinOscFb(1 / 12, 0), 0, dseq(Infinity, [1, 1, 2, 3, 4, 1] * (sinOscFb(1 / 96, 0) < 0.5 * 19 + 99)) * b), 1, 3);
let y = sinOscFb(f0, sinOscFb(b / 16, 0) + 1 / 3).splay2;
let z = hpf(c > 0.1, 9 ** sinOscFb(1 / 19, 0) + 3) * sinOscFb([12, 9] * 99, 0) / 6;
([x, x] + y + z).tanh * 0.1
