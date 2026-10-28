/* deep trip (jmcc) #9 ; texture=overlap,12,4,4,inf */
let f = (lfNoise1(rand(0, 0.3)) * 60 + 70).midiCps;
let a = lfNoise2(f * rand(0, 0.5)) * (lfNoise1(rand(0, 8)) * sinOsc(rand(0, 40), 0) * 0.1).max(0);
let s = pan2(sinOsc(f, 0) *  a, lfNoise1(rand(0, 5)), 1);
let c = { combC(s, 0.5, { rand(0, 0.2) + 0.3 } ! 2, 20) } !+ 2;
s + c
