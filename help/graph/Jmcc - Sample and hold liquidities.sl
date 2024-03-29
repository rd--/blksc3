{- sample and hold liquidities (jmcc) #4 -}
var r = MouseX(1, 200, 1, 0.1);
var t = r.reciprocal;
var c = Impulse(r, 0) * 0.4;
var cf = MouseY(100, 8000, 1, 0.1);
var f = Latch(WhiteNoise() * cf * 0.5 + cf, c);
var p = Latch(WhiteNoise(), c);
var i = Pan2(SinOsc(f, 0), p, Decay2(c, 0.1 * t, 0.9 * t));
CombC(i, 0.3, 0.3, 2)

{- ---- notes.md ---- -}
Mouse control.
