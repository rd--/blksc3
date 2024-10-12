{- https://sccode.org/1-4Qy ; f0 ; 0321 -}
let b = (1 .. 6) * 60;
let c = SinOsc(b, LocalIn(6, 0) * 3);
let d = Bpf(c, SinOsc(16 / b, 0) + 3 * b, 1);
let w = LocalOut(Limiter(d, 0.66, 16 / b));
c.Splay / 2 <! w
