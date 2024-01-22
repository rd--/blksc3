{- F0 - Tw 0045 -}
var f = SinOsc(SinOsc(0.11, 0), 0);
var pf = SinOsc(95 * (SinOsc(0.01, 0) +  1), 0) * (SinOsc(0.005, 0) * 50) + 100;
var p = SinOsc(pf, SinOsc([98, 97], 0)) * (pi + SinOsc(0.0005, 0));
SinOsc(f, p).tanh * 0.1

{- ---- notes.md ---- -}
<http://www.fredrikolofsson.com/f0blog/?q=node/537> (f0)
