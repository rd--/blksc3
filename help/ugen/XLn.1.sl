(* XLn.1.sl *)
var t = 60;
var ln = { :x | XLn(x.first, x.second, t) };
var m = [0.5 0.5; 0.5 1; 1 1.19; 1.19 1.56; 1.56 2; 2.51 2; 3.01 2.66; 4.1 3.01; 4.1 4.1];
var a = [0.25 0.25 1 0.8 0.5 0.9 0.4 0.3 0.6 0.1 0.1];
(SinOsc(500 * m.collect(ln), 0) * a).Splay2 * 0.05

(* ---- notes.md ---- *)
# XLn

Exponential line segment generator.

A collection of sine tone glissandi.
