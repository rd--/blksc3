{- modal space (jmcc) #8 -}
var b = [0, 2, 3.2, 5, 7, 9, 10].asLocalBuf;
var k = DegreeToKey(b, MouseX(0, 15, 0, 0.1), 12);
var n = LfNoise1([3, 3]);
var r = 48;
var o = SinOsc((r + k + (n * 0.04)).midiCps, 0) * 0.1;
var t = LfPulse([48, 55].midiCps, 0, 0.15);
var f = (SinOsc(0.1, 0) * 10 + r).midiCps;
var d = Rlpf(t, f, 0.1) * 0.1;
var m = o + d;
CombC(m, 0.31, 0.31, 2) + m * 0.25

{- ---- notes.md ---- -}
Mouse control.
