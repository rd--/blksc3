{- Pkt 00 (F0) -}
let f0 = [100, 200, 300] + SinOsc([0.11, 0.22, 0.33], 0);
let ph0 = SinOsc([0.1, 0.2, 0.3], 0) * 2 * pi;
let a0 = SinOsc([0.01, 0.02, 0.03], 0) * 0.05 + 0.1;
let i = SinOsc(f0, ph0) * a0;
let w = SinOsc(SinOsc(SinOsc(0.13, 0) * 5 + 6, 0) * 8 + 50, 0) + 1;
let s = Splay2(i, w, 0.7, SinOsc(1.2, 0) * 0.6, true);
GVerb(s, 20, 5, 1, 0.5, 25, 0, 1, 1, 300).Sum

{- ---- notes.md ---- -}
[f0blog/?q=node/490](http://www.fredrikolofsson.com/f0blog/?q=node/490)
