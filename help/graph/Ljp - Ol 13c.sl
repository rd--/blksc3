// trills ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #13c
var p = #[0.5, 1, 2];
Pan2(SinOsc(1000 * Lag((LFSaw(p * 0.4, 0) / p).roundTo(1 / 8), 0.002).sum, 0), 0, 0.2)
