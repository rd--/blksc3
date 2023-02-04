// hedge trimmer ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #5
Pan2(BPF(PinkNoise(), 1.to(64) * (LFNoise2(4) * 30 + 100), 0.01).sum, 0, 0.6)
