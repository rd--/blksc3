/* Sc-140 ; 18 ; Nathaniel Virgo */
let p = { PinkNoise() } ! 2;
let q = p + Blip(p + 2, 400);
let a = Brf(q, 150, 2) * 0.1;
let l = Lpf(p + 0.2 * Dust(0.1), 60);
let r = FreeVerb2(l[1], l[2], 1, 1, 0.2);
let b = Lpf((r * 1E5).Tanh, 2E4);
a + b
