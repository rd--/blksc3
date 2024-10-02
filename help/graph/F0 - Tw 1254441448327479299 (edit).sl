{- F0 ; https://twitter.com/redFrik/status/1254441448327479299 ; rd (edit) -}
var b = [1, 3, 5, 8, 10];
var e = [3, 2 / 3, 4, 3 / 2, 2];
var c = 0.021;
var d = LfTri(b / 999, 0) % 1;
var m = LfTri(b * c, 0);
var l = m * 7 + 20 + Dseq(inf, b % m * 5 + 6);
var j = Duty(e / (12 ** m), 0, l);
var k = DegreeToKey(b.asLocalBuf, j, 12);
var o = SinOscFb(k.MidiCps, LfTri(c / b + 1 / 3, Decay2(Impulse([2 / 3, 1.5, 3, 1.5, 3], 0), c, d)) * d);
FreeVerb(Splay2(o), 0.1, 1, 0.5) * 0.1

{- ---- notes.md ---- -}
A slight edit of the f0 graph [f0/1254441448327479299](https://twitter.com/redFrik/status/1254441448327479299)
