(* trinkets (jmcc) ; http://www.iamas.ac.jp/~aka/dspss2004/materials/ *)
var amp = 0.2;
var gate = 1;
var nc = 2;
var z = 0.0, a = 0.1, b = 0.2, c = 0.4;
var clock = Dust(4);
var x = SinOsc(TRand(400, 12000, clock), 0) * Decay2(clock, 0.002, 0.04);
x = PanAz(nc, x, TRand(-1, 1, clock), 1, 2, 0.5);
x = CombC(x, 0.2, { Rand(0.04, 0.2) }.dup(4), 2);
x * Linen(gate, 0.1, amp, 0.3, 2);
