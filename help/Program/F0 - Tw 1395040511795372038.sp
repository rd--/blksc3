/* f0 ; https://twitter.com/redFrik/status/1395040511795372038 */
let b = [2, 6, 3, 1];
let c = 500;
let f = duty(b, sinOscFb(b / 9, 0), dseq(Infinity, (sinOscFb(b / 24, 0).round(1) + 0.to(9) * 7 + 29.17).midiCps));
let o = sinOscFb(f, sinOscFb(b / 13, 0).max(0) / 3 * 2);
let p = allpassC(o / 8, 1, 0.51, 8);
let q = bpf(hasher(sinOscFb(b / 12, 0).max(0)) * sinOscFb(b / c, 0).max(0) / c, 2 ** sinOscFb(b / c * 2, 0) * 1000, 1 / 99);
hpf(p + gVerb(q, 99, 9, 0.2, 0.5, 15, 1, 0.7, 0.5, 300), 50).clump(2).sum.transpose.sum * 0.2
