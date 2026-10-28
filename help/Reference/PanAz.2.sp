/* panAz.2.sl */
let a = { dc(0) } ! 8;
let b = panAz(
	8,
	pinkNoise(),
	mouseX(0.1, 2, 0, 0.2),
	0.1,
	3,
	0.5
);
a ++ b

# panAz

Offset an _n_-channel panner by pre-pending an array of silent channels.

The default values for _#_ here are both eight,
