/* https://recarteblog.wordpress.com/2021/05/05/gongfm_sc/ ; or ; edit */
let dur = 7;
let tr = Impulse(1 / dur, 0);
let ratio1 = TRand(0.49, 1.11, tr);
let ratio2 = TRand(0.17, 0.55, tr);
let ratio3 = TRand(0.34, 1.35, tr);
let index2 = TRand(1.33, 2.00, tr);
let index3 = TRand(3.29, 5.06, tr);
let amp = 0.7;
let pan = 0;
let env3 = LinSeg(tr, [0, 0.4, 1, 0.3, 1, dur, 0]);
let env2 = LinSeg(tr, [0, 0, 1, 0.3, 1, dur, 0]);
let env1 = LinSeg(tr, [0, 0.003, 1, 0.3, 1, dur - 0.5, 0]);
let op3 = SinOsc([67, 70, 74].midiCps * ratio3, 0) * [67, 70, 74].midiCps * ratio3 * index3 * env3;
let op2 = SinOsc([67, 70, 74].midiCps * ratio2 + op3, 0) * [67, 70, 74].midiCps * ratio2 * index2 * env2;
let op1 = SinOsc([67, 70, 74].midiCps * ratio1 + op2, 0);
let sig = Splay2(op1 * env1 * amp);
EqBalance2(sig.first, sig.second, pan)
