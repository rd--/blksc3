{- f0 ; https://twitter.com/redFrik/status/1395519538008141835 -}
var c = Duty(0.004, 0, Dseries(inf, 1, [1, 2]) % Duty(8.192, 0, Dseq(inf, 1.to(6) * 75)));
var d = Hpf(MantissaMask(c, 3),5);
var p = [250, 200] * Duty(4.096, 0, Dseq(inf, [4, 6, 5, 5, 5, 5, 3] / 4)).Lag(0.1);
var o = SinOscFb(p, SinOscFb(0.08, 0).Max(0)) * SinOscFb(1 / [99, 60], 0).Max(0) / 3;
Lpf((d.Sin + (SinOscFb(63, SinOscFb(0.8, 0).Max(0)) * d) / 9 + o).Tanh / 2, 10000) * 0.1
