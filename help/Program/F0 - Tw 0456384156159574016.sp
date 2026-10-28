/* https://twitter.com/redFrik/status/456384156159574016 */
let a = 1 / [3, 12, 4, 1, 6, 2];
let s = lag3(sinOsc(a, 0), sinOsc(2.67 ^ a, 0).abs) * 99;
let f = ((sinOsc((1 / a) / 9, a) > 0) * 20 + 99) / a;
sinOsc(hpf(ringz(s, f, 1), 440), 0).splay * 0.25
