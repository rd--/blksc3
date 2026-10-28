/* trinkets (jmcc) ; http://www.iamas.ac.jp/~aka/dspss2004/materials/ */
let amp = 0.2;
let gate = 1;
let nc = 2;
let z = 0.0;
let a = 0.1;
let b = 0.2;
let c = 0.4;
let clock = dust(4);
let x = sinOsc(tRand(400, 12000, clock), 0) * decay2(clock, 0.002, 0.04);
x := panAz(nc, x, tRand(-1, 1, clock), 1, 2, 0.5);
x := combC(x, 0.2, { rand(0.04, 0.2) } ! 4, 2);
x * linen(gate, 0.1, amp, 0.3, 2)
