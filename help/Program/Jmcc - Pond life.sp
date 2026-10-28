/* Pond life (Jmcc) #1 ; texture=overlap,8,8,4,inf */
let f = sinOsc(
	rand(20, 50),
	0
) * rand(100, 400) + linRand(500, 2500, 0);
let o = sinOsc(
	f,
	0
) * lfPulse(
	3 / rand(1, 9),
	0,
	rand(0.2, 0.5)
) * 0.04;
pan2(o, rand(-1, 1), 1)
