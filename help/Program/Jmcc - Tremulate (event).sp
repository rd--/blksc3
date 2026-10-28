/* tremulate (jmcc) ;  event control */
let voiceFunc = { :e |
	pan2(
		sinOsc(e.x * 400 + 500 * [1.0, 1.2, 1.5, 1.8], 0),
		{ rand(-1, 1) } ! 4 + (e.i * 2 - 1),
		lfNoise2({ rand(30, 90) } ! 4 * (0.75 + e.j)).max(0) * e.z * lagUd(e.w, 0, e.k * 2)
	).sum
};
combC(Voicer(1, 16, voiceFunc:/1).sum * 0.5, 0.1, 0.1, 1)
