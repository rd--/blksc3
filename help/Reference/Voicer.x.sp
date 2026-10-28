/* Voicer.x */
voicer(1, 16) { :e |
	sinOsc((e.x * 24 + 48).midiCps, 0) * 0.1 * e.w
}.splay2
