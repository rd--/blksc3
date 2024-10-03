{- LfSaw.3 -}
OverlapTexture({ :tr |
	{
		let f = TChoose(tr, (48 .. 72).MidiCps);
		let ff = f * (SinOsc(TExpRand(4, 6, tr), 0) * 0.008 + 1);
		LfSaw(ff * TRand(0.99, 1.01, tr), 0) * 0.05
	} !^ 10
}, 2, 3, 4).Mix

{- ---- notes.md ---- -}
# LfSaw

Overlap-add texture of randomly modulate sawtooth oscillators.
