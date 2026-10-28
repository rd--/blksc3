/* Tank (Jmcc) */
let p = {
	pan2(
		decay2(dust(0.2), 0.1, 0.5) * 0.1 * sinOsc(expRand(300, 2200), 0).cube,
		rand(-1, 1),
		1
	)
};
let z = (p/0 ! 12).sum + pan2(decay2(dust(0.01), 0.04, 0.3) * brownNoise(), 0, 1);
let l1 = onePole(localIn(2, 0) * 0.98, 0.33);
let l2 = rotate2(l1.first, l1.second, 0.23);
let l3 = allpassC(l2, 0.05, { rand(0.01,0.05) } ! 2, 2);
let l4 = delayC(l3, 0.3, [0.17, 0.23]);
let l5 = allpassC(l4, 0.05, { rand(0.03,0.15) } ! 2, 2);
let l6 = 0;
4.timesRepeat {
	z := allpassC(z, 0.03, { rand(0.005, 0.02) } ! 2, 1)
};
l6 := leakDc(l5, 0.995) + z;
l6 <! localOut(l6)
