/* lfSaw.3 */
overlapTexture({ :tr |
	{
		let f = tChoose(tr, (48 .. 72).midiCps);
		let ff = f * (sinOsc(tExpRand(4, 6, tr), 0) * 0.008 + 1);
		lfSaw(ff * tRand(0.99, 1.01, tr), 0) * 0.05
	} !^ 10
}, 2, 3, 4).mix

# lfSaw

Overlap-add texture of randomly modulated sawtooth oscillators.
