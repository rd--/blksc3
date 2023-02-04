// trills ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #13a
var p = #[1, 3, 5];
Pan2(SinOsc(800 * (SinOsc(p * 0.1, 0) / p).roundTo(1 / 6).sum, 0), 0, 0.2)
