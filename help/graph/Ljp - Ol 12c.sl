// feedback racket ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #12c
var p = { PinkNoise() * 0.03 }.dup;
p + CombC(p, 0.2, LFNoise0(1) * 0.2 + 0.2, -10000)
