/* https://twitter.com/alln4tural/status/99846300173991936 ; graph rewrite */
{ :tr |
	let h = TChoose(tr, [33 38 40]).MidiCps * (2 ^ TChoose(tr, [0 .. 4]));
	{
		SinOsc(TExpRand(h - (h / 64), h + (h / 64), tr), 0) * 0.025
	} !^ 8
}.OverlapTexture(1, 9, 40).Mix
