/* aleatoric quartet (jmcc) #7 */
let amp = 0.07;
let density = mouseX(0.01, 1, 0, 0.1);
let dmul = density.reciprocal * 0.5 * amp;
let dadd = amp - dmul;
let mkSig = { :ix |
	let x = pinkNoise() * (lfNoise1(8) * dmul + dadd).max(0);
	let n0 = lfNoise0(selectT(iRand(0, 2), [1, 0.5, 0.25]));
	let freq = lag((n0 * 7 + 66 + rand(-30, 30)).round(1), 0.2).midiCps;
	pan2(combC(x, 0.02, freq.reciprocal, 3), rand(-1, 1), 1)
};
let g = 1.to(4).collect(mkSig/1).sum;
5.timesRepeat {
	g := allpassC(g, 0.05, { rand(0, 0.05) } ! 2, 1)
};
leakDc(g, 0.995)

# Notes

Mouse control.
