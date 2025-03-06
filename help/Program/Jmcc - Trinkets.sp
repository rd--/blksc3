/* trinkets (jmcc) ; http://www.iamas.ac.jp/~aka/dspss2004/materials/ */
let amp = 0.2;
let gate = 1;
let nc = 2;
let z = 0.0;
let a = 0.1;
let b = 0.2;
let c = 0.4;
let clock = Dust(4);
let x = SinOsc(TRand(400, 12000, clock), 0) * Decay2(clock, 0.002, 0.04);
x := PanAz(nc, x, TRand(-1, 1, clock), 1, 2, 0.5);
x := CombC(x, 0.2, { Rand(0.04, 0.2) } ! 4, 2);
x * Linen(gate, 0.1, amp, 0.3, 2)
