/* F0 ; https://twitter.com/redFrik/status/1254441448327479299 ; Rd (Edit) */
let b = [1, 3, 5, 8, 10];
let e = [3, 2 / 3, 4, 3 / 2, 2];
let c = 0.021;
let d = LfTri(b / 999, 0) % 1;
let m = LfTri(b * c, 0);
let l = m * 7 + 20 + Dseq(Infinity, b % m * 5 + 6);
let j = Duty(e / (12 ^ m), 0, l);
let k = DegreeToKey(b.asLocalBuf, j, 12);
let o = SinOscFb(k.MidiCps, LfTri(c / b + 1 / 3, Decay2(Impulse([2 / 3, 1.5, 3, 1.5, 3], 0), c, d)) * d);
FreeVerb(Splay2(o), 0.1, 1, 0.5) * 0.1

# Notes

A slight edit of original
[F0](https://twitter.com/redFrik/status/1254441448327479299)
graph.
