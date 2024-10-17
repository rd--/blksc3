/* tremulate (jmcc) ;  event control */
let voiceFunc = { :e |
	Pan2(
		SinOsc(e.x * 400 + 500 * [1.0, 1.2, 1.5, 1.8], 0),
		{ Rand(-1, 1) } ! 4 + (e.i * 2 - 1),
		LfNoise2({ Rand(30, 90) } ! 4 * (0.75 + e.j)).Max(0) * e.z * LagUd(e.w, 0, e.k * 2)
	).sum
};
CombC(Voicer(1, 16, voiceFunc:/1).sum * 0.5, 0.1, 0.1, 1)
