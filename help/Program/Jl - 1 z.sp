/* http://sccode.org/1-Z (jl) ; edits (rd) */
let t = 0.0025;
let a = lag(trig(impulse(8, 0), t * 2), 0.1);
let b = crackle(lag(lfSaw(3, 0).abs, 0.1) * 1.8);
let c = a * b;
let d = lag((trig(impulse(2, 0) + impulse(4, 0.5), t)), 0.1);
let e = blip(4.9, 7) * 0.4;
let f = d * e;
(c + gVerb(f, 1, 1, 0.5, 0.5, 15, 1, 0.7, 0.5, 300) * 5).tanh * 0.25
