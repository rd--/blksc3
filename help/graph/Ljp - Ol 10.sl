{- sine slurps ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #10 -}
SinOsc(0, BPF({ Dust(10) }.dup * 20000,  { LFNoise1(10) }.dup * 4000 + 4000,  0.1)) * 0.2
