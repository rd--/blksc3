/* sfRead ; phasor as phase input */
let sf = sfAcquireStereo('PianoC5');
{
	let tr = impulse(2 ^ rand(1, 3) / sfDuration(sf), 0).kr;
	let mnn = tiRand(-2, 0, tr) * 12 + tChoose(tr, [-3 0 2 5 7]);
	let rt = mnn.midiRatio * sfRateScale(sf);
	let ph = phasor(tr, rt, 0, sfFrameCount(sf), 0);
	sfRead(sf, ph, 0, 2)
} !+ 6 * 0.25
