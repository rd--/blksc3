(* https://sccode.org/1-4Qy ; f0 ; 0340 *)
var c = SinOscFB(1 / [12, 8], 0) + 3 / 24;
var m = DmdFor(c, 0, Seq(inf, [0, 8, 5, 1, 5, 4, 5] * (c * 18).rounded)) + 60;
AllpassC(SinOscFB(m.midiCps, c * 2), 0.2, 0.2, 1) / 2
