/* plucked strings (jmcc) */
var strFunc = {
    pan2(combC(decay(
        [
            impulse(rand(2, 2.2), 0) * 0.3,
            dust(0.5) * 0.3,
            impulse(sinOsc(rand(0.05, 0.15), rand(0, pi * 2)) * 5 + 5.2, 0) * 0.3
        ].choose,
        0.1) * pinkNoise() * 0.1, 0.01, 1 / rand(60, 90).floor.midiCps, 4), rand(-1, 1), 1)
};
strFunc.dup(5).sum
