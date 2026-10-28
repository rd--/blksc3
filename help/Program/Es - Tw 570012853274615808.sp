/* Tw 570012853274615808 (Es) ; https://twitter.com/sluyterrific_sc/status/570012853274615808 */
let t = dust2([9, 9]);
let o = 0.1;
let a = lfNoise2(o) * 9 + 9;
let s = varSaw(tExpRand(9, 5000, t), 0, 0.5) * decay(t, 1);
greyholeRaw(s.first, s.second, 0, a, lfNoise2(1), lfNoise2(1) + 1, 2, a, o) * 0.2
