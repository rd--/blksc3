{- impulse sequencer (jmcc) SC2 -}
var t = Impulse(8, 0);
var isequ = { arg s; t * Demand(t, 0, Seq(inf, s)) };
var c_sq = isequ.value(#[1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0]);
var d_sq = isequ.value(#[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]);
var n_sq = isequ.value(#[1.0, 0.1, 0.1, 1.0, 0.1, 1.0, 0.1, 0.1]);
var b_sq = isequ.value(#[1, 0, 0.2, 0, 0.2, 0, 0.2, 0]);
var c = Decay2(c_sq, 0.001, 0.3) * SinOsc(1700, 0) * 0.1;
var d = Decay2(d_sq, 0.001, 0.3) * SinOsc(2400, 0) * 0.04;
var n = Decay2(n_sq, 0.001, 0.25) * BrownNoise() * 0.1;
var b = Decay2(b_sq, 0.001, 0.5) * SinOsc(100, 0) * 0.2;
c + d + n + b
