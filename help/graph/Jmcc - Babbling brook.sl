{- babbling brook (jmcc) #Sc3 -}
var p = { Rhpf(OnePole(BrownNoise(), 0.99), Lpf(BrownNoise(), 14) * 400 + 500, 0.03) * 0.06 } ! 2;
var q = { Rhpf(OnePole(BrownNoise(), 0.99), Lpf(BrownNoise(), 20) * 800 + 1000, 0.01) * 0.10 } ! 2;
p + q
