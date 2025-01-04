/* https://recarteblog.wordpress.com/2021/05/05/gongfm_sc/ ; or ; edit */
var dur = 7;
var tr = Impulse(1 / dur, 0);
var ratio1 = TRand(0.49, 1.11, tr);
var ratio2 = TRand(0.17, 0.55, tr);
var ratio3 = TRand(0.34, 1.35, tr);
var index2 = TRand(1.33, 2.00, tr);
var index3 = TRand(3.29, 5.06, tr);
var amp = 0.7;
var pan = 0;
var env3 = LinSeg(tr, [0, 0.4, 1, 0.3, 1, dur, 0]);
var env2 = LinSeg(tr, [0, 0, 1, 0.3, 1, dur, 0]);
var env1 = LinSeg(tr, [0, 0.003, 1, 0.3, 1, dur - 0.5, 0]);
var op3 = SinOsc([67, 70, 74].MidiCps * ratio3, 0) * [67, 70, 74].MidiCps * ratio3 * index3 * env3;
var op2 = SinOsc([67, 70, 74].MidiCps * ratio2 + op3, 0) * [67, 70, 74].MidiCps * ratio2 * index2 * env2;
var op1 = SinOsc([67, 70, 74].MidiCps * ratio1 + op2, 0);
var sig = Splay2(op1 * env1 * amp);
EqBalance2(sig.first, sig.second, pan);
