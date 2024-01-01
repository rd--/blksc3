(* https://sccode.org/1-4Qy ; f0 ; 0340 *)
var c = SinOscFb(1 / [12, 8], 0) + 3 / 24;
var m = Duty(c, 0, Dseq(inf, [0, 8, 5, 1, 5, 4, 5] * (c * 18).rounded)) + 60;
AllpassC(SinOscFb(m.MidiCps, c * 2), 0.2, 0.2, 1) / 2
