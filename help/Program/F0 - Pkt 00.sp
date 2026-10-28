/* Pkt 00 (F0) ; http://www.fredrikolofsson.com/f0blog/?q=node/490 */
let f0 = [100, 200, 300] + sinOsc([0.11, 0.22, 0.33], 0);
let ph0 = sinOsc([0.1, 0.2, 0.3], 0) * 2.pi;
let a0 = sinOsc([0.01, 0.02, 0.03], 0) * 0.05 + 0.1;
let i = sinOsc(f0, ph0) * a0;
let w = sinOsc(sinOsc(sinOsc(0.13, 0) * 5 + 6, 0) * 8 + 50, 0) + 1;
let s = splay2(i, w, 0.7, sinOsc(1.2, 0) * 0.6, true);
gVerb(s, 20, 5, 1, 0.5, 25, 0, 1, 1, 300).sum
