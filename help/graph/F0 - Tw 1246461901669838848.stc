// https://twitter.com/redFrik/status/1246461901669838848
var c = LFPulse(1 / 11, 0, 1 / 4) * 99 + 99;
var l1 = SinOscFB(1 / 11, 0) / 2 + 1 / 9;
var f1 = Lag(LFPulse(1 / [8, 9] + LFPulse(0.1, 0, 0.5), 0, 0.5), l1) * 4 / 3 + 1 ** LFPulse(1 / [9,8], 0, 0.5) * c;
var l2 = SinOscFB(1 / [5,4], 0).max(0) / 9;
var f2 = Pitch(Lag(LFPulse(f1, 0, 0.5), l2).sum, 440, 60, 4000, 100, 16, 1, 0.01, 0.5, 1, 0).first;
var d = SinOscFB(f2, Lag(LFPulse(1 / [LFPulse(1 / 9, 0, 0.5) + 2, 3], 0, 0.5), 0.1) / 4 + 0.3);
var e = PitchShift(d / 2, 2, [3, 2] - Lag(LFPulse(1 / [18, 17], 0, 0.5), 0.1), 0, 0);
HPF(d + e, 9) / 4 / 4
