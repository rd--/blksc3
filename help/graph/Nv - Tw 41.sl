{- https://swiki.hfbk-hamburg.de/MusicTechnology/899 (nv) [Line 41] -}
var n = {
  arg i;
  BPF({ PinkNoise() }.dup,
      4 ** LFNoise2(1.2 ** i / 16) * 300,
      0.15) * (5 ** LFNoise2(1.9 ** i / 128) / (i + 8) * 20)
};
1.to(15).collect(n).Splay2
