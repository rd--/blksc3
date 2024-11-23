/* Tw 570012853274615808 (Es) ; https://twitter.com/sluyterrific_sc/status/570012853274615808 */
let t = Dust2([9, 9]);
let o = 0.1;
let a = LfNoise2(o) * 9 + 9;
let s = VarSaw(TExpRand(9, 5000, t), 0, 0.5) * Decay(t, 1);
GreyholeRaw(s.first, s.second, 0, a, LfNoise2(1), LfNoise2(1) + 1, 2, a, o) * 0.2
