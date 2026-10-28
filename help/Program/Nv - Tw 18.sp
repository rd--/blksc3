/* Sc-140 ; 18 ; Nathaniel Virgo */
let p = { pinkNoise() } ! 2;
let q = p + blip(p + 2, 400);
let a = brf(q, 150, 2) * 0.1;
let l = lpf(p + 0.2 * dust(0.1), 60);
let r = freeVerb2(l[1], l[2], 1, 1, 0.2);
let b = lpf((r * 1E5).tanh, 2E4);
a + b
