;; https://twitter.com/redFrik/status/1254441448327479299
var b = [1, 3, 5, 8, 10];
var e = [3, 2 / 3, 4, 3 / 2, 2];
var c = 0.021;
var d = LfTri(b / 999, 0) % 1;
var m = LfTri(b * c, 0);
var l = m * 7 + 20 + Seq(inf, b % (m * 5 + 6));
var j = DmdFor(e / (12 ** m), 0, l);
var f = DegreeToKey(b.asLocalBuf, j, 12).MidiCps;
var o = SinOscFb(f, LfTri(c / b, 0) + 1 / 3) * Decay2(Impulse([2 / 3, 1.5, 3, 1.5, 3], 0), c, d) * d;
FreeVerb(Splay2(o), 0.1, 1, 0.5)
