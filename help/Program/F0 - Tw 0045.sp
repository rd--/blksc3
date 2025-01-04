/* F0 - Tw 0045 */
let f = SinOsc(SinOsc(0.11, 0), 0);
let pf = SinOsc(95 * (SinOsc(0.01, 0) +  1), 0) * (SinOsc(0.005, 0) * 50) + 100;
let p = SinOsc(pf, SinOsc([98, 97], 0)) * (pi + SinOsc(0.0005, 0));
SinOsc(f, p).Tanh * 0.1

# Notes

[F0](http://www.fredrikolofsson.com/f0blog/?q=node/537)
