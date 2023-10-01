(* f0 ; https://twitter.com/redFrik/status/1395519538008141835 *)
var c = DmdFor(0.004, 0, Ser(inf, 1, #[1, 2]) % DmdFor(8.192, 0, Seq(inf, 1.to(6) * 75)));
var d = HPF(MantissaMask(c, 3),5);
var p = #[250, 200] * DmdFor(4.096, 0, Seq(inf, #[4, 6, 5, 5, 5, 5, 3] / 4)).Lag(0.1);
var o = SinOscFB(p, SinOscFB(0.08, 0).max(0)) * SinOscFB(1 / #[99, 60], 0).max(0) / 3;
LPF((d.sin + (SinOscFB(63, SinOscFB(0.8, 0).max(0)) * d) / 9 + o).tanh / 2, 10000) * 0.1
