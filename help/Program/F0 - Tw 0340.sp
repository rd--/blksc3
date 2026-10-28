/* F0 - Tw 0340 ; https://sccode.org/1-4Qy */
let c = sinOscFb(1 / [12 8], 0) + 3 / 24;
let l = dseq(
	Infinity,
	[0 8 5 1 5 4 5] * (c * 18).round
);
let m = duty(c, 0, l) + 60;
allpassC(
	sinOscFb(m.midiCps, c * 2),
	0.2,
	0.2,
	1
) / 2
