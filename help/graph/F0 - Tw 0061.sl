{- https://fredrikolofsson.com/f0blog/more-sc-twitter/, f0 -}
var t = Saw(#[9, 9.01]);
var f = Demand(t, 0, Seq(inf, [0, 0, 0, 0, 0, 0, 500]));
var m = Lag(Demand(t, 0, Shuf(inf, 0.to(7) * 99)), 0.04);
var p = SinOsc(m, 0);
SinOsc(f, p) / 2
