{- modal space (jmcc) #8 -}
var b = [0, 2, 3.2, 5, 7, 9, 10].asLocalBuf;
var k = DegreeToKey(b, MouseX(0, 15, 0, 0.1), 12);
var n = LfNoise1([3, 3]);
var c = {
    arg r;
    CombN(
        SinOsc((r + k + (n * 0.04)).midiCps, 0) * 0.1
        +
        (Rlpf(LfPulse([48, 55].midiCps, 0, 0.15), (SinOsc(0.1, 0) * 10 + r).midiCps, 0.1) * 0.1),
        0.31,
        0.31,
        2)
};
[48, 72].collect(c).sum * 0.25

{- ---- notes.md ---- -}
Mouse control.
