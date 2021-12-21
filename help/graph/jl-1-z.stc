// http://sccode.org/1-Z (jl) ; edits (rd)
var t = 0.0025;
var a = Lag(Trig(Impulse(8, 0), t * 2), 0.1);
var b = Crackle(Lag(LFSaw(3, 0).abs, 0.1) * 1.8);
var c = a * b;
var d = Lag((Trig(Impulse(2, 0) + Impulse(4, 0.5), t)), 0.1);
var e = Blip(4.9, 7) * 0.4;
var f = d * e;
(c + GVerb(f, 1, 1, 0.5, 0.5, 15, 1, 0.7, 0.5, 300) * 5).tanh * 0.25
