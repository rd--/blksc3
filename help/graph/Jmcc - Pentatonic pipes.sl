{- pentatonic pipes (jmcc) ; mousex on right half of screen causes pulsation -}
var n = 5;
var mode = [0, 3, 5, 7, 10].asLocalBuf;
var root = Rand(12, 48);
var z = OverlapTexture({ :tr |
    Pan2(
        (Resonz(PinkNoise() * 20, (DegreeToKey(mode, TRand(0, 20, tr), 12) + root).MidiCps, 0.002) * 4).Distort,
        TRand(-1, 1, tr),
        0.2);
}, 10, 0.1, n);
z := z * Select2(MouseX(0, 1, 0, 0.2) > 0.5, SinOsc(5, 0).max(0), 1);
CombC(z, 0.3, 0.3, 8) + z.reverse

{- ---- notes.md ---- -}
Mouse control.
