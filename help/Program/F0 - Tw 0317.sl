{- https://sccode.org/1-4Qy ; F0 ; 0317 -}
let b = [0, 3, 7, 5, 2, 9, 10] + 0.2;
let c = VarSaw(0.5 / b, 0, 0.5);
let m = Select(VarSaw(2.01 / b, 0, 0.5) * 8, c > 0 * 12 + b + 48);
Splay2(VarSaw(m.MidiCps, 0, c % 1).Tanh) / 2
