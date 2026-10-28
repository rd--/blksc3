/* impulse sequencer (jmcc) SC2 */
var t = impulse(8, 0);
var isequ = { arg s; t * demand(t, 0, Seq(Infinity, s)) };
var c_sq = isequ.value(#[1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0]);
var d_sq = isequ.value(#[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]);
var n_sq = isequ.value(#[1.0, 0.1, 0.1, 1.0, 0.1, 1.0, 0.1, 0.1]);
var b_sq = isequ.value(#[1, 0, 0.2, 0, 0.2, 0, 0.2, 0]);
var c = decay2(c_sq, 0.001, 0.3) * sinOsc(1700, 0) * 0.1;
var d = decay2(d_sq, 0.001, 0.3) * sinOsc(2400, 0) * 0.04;
var n = decay2(n_sq, 0.001, 0.25) * brownNoise() * 0.1;
var b = decay2(b_sq, 0.001, 0.5) * sinOsc(100, 0) * 0.2;
c + d + n + b
