/* f0 ; https://twitter.com/redFrik/status/1395878538297892865 */
let t = impulse(5, 0);
let g = [3, 2];
let e = lagUd(t, 0.001, sinOscFb(g / 99, 0) + 1.08);
let m = [24, 0, 3, 5, 7, 10, 36].collect({ :i | i + [36, 48, 36, 33, 60, 72]}).catenate;
let o = sinOscFb(demand(t, 0, dseq(Infinity, m.midiCps) / g), sinOscFb(0.02, 0)) * e;
let c = rlpf(o, 3 ** sinOscFb(0.04, 0) + e * 2000, 3 ** sinOscFb(g / 9, 0) / 3) * 4;
(combC(c.tanh, 1, 1 / 2, 4) + combC(c, 1, 1 / 3, 5) / 8 + c).tanh * 0.1
