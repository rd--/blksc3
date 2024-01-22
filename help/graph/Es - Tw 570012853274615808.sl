{- tw 570012853274615808 (es) -}
var t = Dust2([9, 9]);
var o = 0.1;
var a = LfNoise2(o) * 9 + 9;
var s = VarSaw(TExpRand(9, 5000, t), 0, 0.5) * Decay(t, 1);
GreyholeRaw(s.first, s.second, 0, a, LfNoise2(1), LfNoise2(1) + 1, 2, a, o) * 0.2

{- ---- notes.md ---- -}
[sluyterrific_sc/570012853274615808](https://twitter.com/sluyterrific_sc/status/570012853274615808),
requires _sc3-plugins_.
