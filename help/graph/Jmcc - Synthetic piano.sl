{- synthetic piano (jmcc) #3; -}
var p = {
    var n = Rand(36, 90);
    var e = Decay2(Impulse(Rand(0.1, 0.5), Rand(0, 1)) * 0.1, 0.008, 0.04);
    var c = { :i |
        var dt = 1 / (n + [-0.05, 0, 0.04].nth(i)).MidiCps;
        CombL(LfNoise2(3000) * e, dt, dt, 6)
    };
    Pan2(1.to(3).collect(c).sum, n - 36 / 27 - 1, 1)
};
p.dup(3).sum
