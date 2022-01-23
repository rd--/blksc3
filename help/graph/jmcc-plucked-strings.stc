// plucked strings (jmcc)
var strFunc = {
    Pan2(CombC(Decay(
        [
            Impulse(Rand(2, 2.2), 0) * 0.3,
            Dust(0.5) * 0.3,
            Impulse(SinOsc(Rand(0.05, 0.15), Rand(0, pi * 2)) * 5 + 5.2, 0) * 0.3
        ].choose,
        0.1) * PinkNoise() * 0.1, 0.01, 1 / Rand(60, 90).floor.midiCps, 4), Rand(-1, 1), 1)
};
strFunc.dup(5).sum
