;; tremulate (jmcc) ;  event control
var voiceFunc = { :e |
	Pan2(
		SinOsc(e.x * 400 + 500 * [1.0, 1.2, 1.5, 1.8], 0),
		{ Rand(-1, 1) }.dup(4) + (e.o * 2 - 1),
		LfNoise2({ Rand(30, 90) }.dup(4) * (0.75 + e.rx)).Max(0) * e.z * LagUd(e.w, 0, e.ry * 2)
	).sum
};
CombC(Voicer(16, voiceFunc).sum * 0.5, 0.1, 0.1, 1)