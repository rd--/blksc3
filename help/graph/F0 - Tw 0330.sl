(* https://sccode.org/1-4Qy ; f0 ; 0330 *)
let c = SinOsc([2 3] / 8, 0) % 0.5;
let o = FreqShift(c, SinOsc(1 / [9 5], 0).RoundTo(c > 0.125) + 1 * [3 2] * 99, 0).Tanh / 2;
GVerb(o, 200, 9, 1, 1, 9, 1, 0.1, 0.5, 300).transposed.Mix / 3
