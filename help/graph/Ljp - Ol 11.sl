{- noise slurps ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #11 -}
SinOsc(0, BPF({ WhiteNoise() }.dup * 1000,  { LFNoise1(0.1) }.dup * 2000 + 4000,  0.001)) * 0.1
