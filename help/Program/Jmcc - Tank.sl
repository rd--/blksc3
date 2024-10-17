/* Tank (Jmcc) */
let p = {
	Pan2(
		Decay2(Dust(0.2), 0.1, 0.5) * 0.1 * SinOsc(ExpRand(300, 2200), 0).cubed,
		Rand(-1, 1),
		1
	)
};
let z = (p:/0 ! 12).sum + Pan2(Decay2(Dust(0.01), 0.04, 0.3) * BrownNoise(), 0, 1);
let l1 = OnePole(LocalIn(2, 0) * 0.98, 0.33);
let l2 = Rotate2(l1.first, l1.second, 0.23);
let l3 = AllpassC(l2, 0.05, { Rand(0.01,0.05) } ! 2, 2);
let l4 = DelayC(l3, 0.3, [0.17, 0.23]);
let l5 = AllpassC(l4, 0.05, { Rand(0.03,0.15) } ! 2, 2);
let l6 = 0;
4.timesRepeat {
	z := AllpassC(z, 0.03, { Rand(0.005, 0.02) } ! 2, 1)
};
l6 := LeakDc(l5, 0.995) + z;
l6 <! LocalOut(l6)
