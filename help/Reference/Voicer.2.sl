/* Voicer.2 */
Voicer(1, 16) { :e |
	SinOsc((e.x * 24 + 48).MidiCps, 0) * 0.1 * e.w
}.Splay2
