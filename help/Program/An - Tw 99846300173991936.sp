/* https://twitter.com/alln4tural/status/99846300173991936 ; graph rewrite */
{ :tr |
	let h = tChoose(tr, [33 38 40]).midiCps * (2 ^ tChoose(tr, [0 .. 4]));
	{
		sinOsc(tExpRand(h - (h / 64), h + (h / 64), tr), 0) * 0.025
	} !^ 8
}.overlapTexture(1, 9, 40).mix
