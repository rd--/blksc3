/* SfRead ; phasor as phase input */
let sf = SfAcquireStereo('PianoC5');
{
	let tr = Impulse(2 ^ Rand(1, 3) / SfDuration(sf), 0).kr;
	let mnn = TiRand(-2, 0, tr) * 12 + TChoose(tr, [-3 0 2 5 7]);
	let rt = mnn.MidiRatio * SfRateScale(sf);
	let ph = Phasor(tr, rt, 0, SfFrames(sf), 0);
	SfRead(sf, ph, 0, 2)
} !+ 6 * 0.25
