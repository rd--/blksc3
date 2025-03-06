/* F0 - Tw 0340 ; https://sccode.org/1-4Qy */
let c = SinOscFb(1 / [12 8], 0) + 3 / 24;
let l = Dseq(
	Infinity,
	[0 8 5 1 5 4 5] * (c * 18).RoundTo(1)
);
let m = Duty(c, 0, l) + 60;
AllpassC(
	SinOscFb(m.MidiCps, c * 2),
	0.2,
	0.2,
	1
) / 2
