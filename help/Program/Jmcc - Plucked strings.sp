/* plucked strings (jmcc) */
{
    pan2(combC(decay(
        [
            impulse(rand(2, 2.2), 0) * 0.3,
            dust(0.5) * 0.3,
            impulse(sinOsc(rand(0.05, 0.15), rand(0, 2.pi)) * 5 + 5.2, 0) * 0.3
        ].atRandom,
        0.1) * pinkNoise() * 0.1, 0.01, 1 / rand(60, 90).floor.midiCps, 4), rand(-1, 1), 1)
}.duplicate(5).sum
