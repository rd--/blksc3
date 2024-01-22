{- fey emissions ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #9 -}
var d = { Dust(2) }.dup;
CombC(BPF(d, LFNoise0(10) * 3000 + 3040, 0.001) * 200, 0.2, 0.2, 5)
