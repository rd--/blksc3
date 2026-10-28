/* F0 ; https://twitter.com/redFrik/status/1395519538008141835 */
let c = duty(0.004, 0, dseries(Infinity, 1, [1, 2]) % duty(8.192, 0, dseq(Infinity, 1.to(6) * 75)));
let d = hpf(mantissaMask(c, 3),5);
let p = [250, 200] * duty(4.096, 0, dseq(Infinity, [4, 6, 5, 5, 5, 5, 3] / 4)).lag(0.1);
let o = sinOscFb(p, sinOscFb(0.08, 0).max(0)) * sinOscFb(1 / [99, 60], 0).max(0) / 3;
lpf((d.sin + (sinOscFb(63, sinOscFb(0.8, 0).max(0)) * d) / 9 + o).tanh / 2, 10000) * 0.1
