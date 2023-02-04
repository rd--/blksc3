;; sc-140 ; #11 ; Micromoog
var f = Hasher(Latch(SinOsc([1 .. 4] ! 2, 0), Impulse([5 / 2, 5], 0))) * 300 + 300;
var z = VarSaw(f.RoundTo(60), 0, LfNoise2(2) / 3 + 0.5) / 5;
z.transpose.sum
