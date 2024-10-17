/* nv https://swiki.hfbk-hamburg.de/MusicTechnology/899 */
let s = LocalIn(2, 0) * 7.5 + (Saw([32, 33]) * 0.2);
let f = 2 ^ Lag(LfNoise0(4 / 3) * 4, 0.1) * 300;
let a = CombC(Bpf(s, f, 0.1).Distort, 2, 2, 40);
(a * 0.35) <! LocalOut(a)

/* ---- notes.md ---- */
Note initial silence caused by two second delay.
