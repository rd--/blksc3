// tw 0041 (f0) - http://www.fredrikolofsson.com/f0blog/?q=node/537
var s = Sweep(LocalIn(6, 0), 1);
var i = Impulse([1, 0.749, 6, 12, 3, 4], 0);
var o = SinOsc(1 / RunningMax(s, i), 0);
(o.Splay2.tanh / 2 * 0.1).mrg(LocalOut(o))
