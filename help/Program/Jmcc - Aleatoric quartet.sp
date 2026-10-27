/* aleatoric quartet (jmcc) #7 */
let amp = 0.07;
let density = MouseX(0.01, 1, 0, 0.1);
let dmul = density.reciprocal * 0.5 * amp;
let dadd = amp - dmul;
let mkSig = { :ix |
	let x = PinkNoise() * (LfNoise1(8) * dmul + dadd).max(0);
	let n0 = LfNoise0(Select(IRand(0, 2), [1, 0.5, 0.25]));
	let freq = Lag((n0 * 7 + 66 + Rand(-30, 30)).round(1), 0.2).midiCps;
	Pan2(CombC(x, 0.02, freq.reciprocal, 3), Rand(-1, 1), 1)
};
let g = 1.to(4).collect(mkSig/1).sum;
5.timesRepeat {
	g := AllpassC(g, 0.05, { Rand(0, 0.05) } ! 2, 1)
};
LeakDc(g, 0.995)

# Notes

Mouse control.
