// sc-140 ; 18 ; Nathaniel Virgo
var p = { PinkNoise() }.dup;
var a = BRF(p + Blip(p + 2, 400), 150, 2) * 0.1;
var l = LPF(p + 0.2 * Dust(0.1), 60);
var b = LPF((FreeVerb2(l.first, l.second, 1, 1, 0.2) * 10000).tanh, 2000);
a + b

