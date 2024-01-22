{- https://sccode.org/1-4Qy ; f0 ; 0239 -}
let b = 0.11 / (1 .. 6);
let q = [32, 35, 83, 117, 112, 101, 114, 67, 111, 108, 108, 105, 100, 101, 114, 32].MidiCps;
let o = LfTri(Duty(b, 0, Dseq(inf, q)), 0);
Splay2(CombC(o, 4, LfTri(b / 9, 0) % LfTri(b, 0) * 4 % 4, 5) / 6).Tanh
