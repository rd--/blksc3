(* inverted saw ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #4 *)
EqPan2(
	Saw(LfNoise1(1) * 1000 + 1200) * SinOsc(SampleRate() / 2, 1),
	0
) * 0.3
