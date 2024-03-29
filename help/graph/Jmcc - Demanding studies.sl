{- demanding studies (jmcc) -}
var s1 = Choose(1000, [72, 75, 79, 82]);
var s2 = Choose(1, [82, 84, 86]);
var s3 = Seq(1000, [72, 75, 79, s2]);
var x = MouseX(5, 13, 0, 0.2);
var tr = Impulse(x, 0);
var f = Demand(tr, 0, [(s1 - 12), s3].MidiCps);
var o1 = SinOsc(f + [0, 0.7], 0);
var o2 = Saw(f + [0, 0.7]) * 0.3;
var o3 = (o1 + o2).Distort;
o3 * 0.1

{- ---- notes.md ---- -}
Mouse control.
