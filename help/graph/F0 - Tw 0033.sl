{- tw 0033 (f0) - http://www.fredrikolofsson.com/f0blog/?q=node/537 -}
var f = LFPar(1 / 14, 0).rounded * 20 + 80;
var a = Pulse([1, 2, 3, 4], 0.35);
var n = BrownNoise() * a;
var z = { arg i; [i + 1 * f, i * f + i + 0.333] };
var o = LFPar(1.to(4).collect(z), 0);
((o > n) / 3).Splay2.sum * 0.1
