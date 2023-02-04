// tw 0051 (f0) - http://sccode.org/1-4Qy
var i = Saw([115, 117, 110, 100, 97, 121]);
var f = Saw(9 / [115, 108, 111, 119]) * 400 + 500;
var w = Saw(7 / [99, 111, 100, 105, 110, 103]) + 1.1;
var l = BBandPass(i, f, w) / 9;
GVerb(l.splay, 10, 3, 0.5, 0.5, 15, 1, 0.7, 0.5, 300)
