{- Voicer.3 -}
Voicer(1, 16) { :e |
    Pan2(
        SinOsc((e.x * 24 + 48).MidiCps, 0),
        e.i * 2 - 1,
        e.w * e.z
    )
}.sum
