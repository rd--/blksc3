/* Voicer.y */
voicer(1, 16) { :e |
    pan2(
        sinOsc((e.x * 24 + 48).midiCps, 0),
        e.i * 2 - 1,
        e.w * e.z
    )
}.sum
