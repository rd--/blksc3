// police state (jmcc) #2
var node = {
  var f = SinOsc(Rand(0.02, 0.12), Rand(0, 2 * pi)) * Rand(0, 600) + 1000 + Rand(-300, 300);
  Pan2(SinOsc(f, 0) * LFNoise2(100 + Rand(-20, 20)) * 0.1, Rand(-1, 1), 1)
};
var e = LFNoise2(LFNoise2(#[0.4, 0.4]) * 90 + 620) * (LFNoise2(#[0.3, 0.3]) * 0.15 + 0.18);
CombL(node.dup(4).sum + e, 0.3, 0.3, 3) * 0.2
