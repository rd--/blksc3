/* https://twitter.com/redFrik/status/1246461901669838848 */
let c = lfPulse(1 / 11, 0, 1 / 4) * 99 + 99;
let l1 = sinOscFb(1 / 11, 0) / 2 + 1 / 9;
let f1 = lag(
	lfPulse(1 / [8, 9] + lfPulse(0.1, 0, 0.5), 0, 0.5),
	l1
) * 4 / 3 + 1 ^ lfPulse(1 / [9,8], 0, 0.5) * c;
let l2 = sinOscFb(1 / [5,4], 0).max(0) / 9;
let f2 = Pitch(
	lag(lfPulse(f1, 0, 0.5), l2).sum,
	440,
	60,
	4000,
	100,
	16,
	1,
	0.01,
	0.5,
	1,
	0
).first;
let d = sinOscFb(
	f2,
	lag(
		lfPulse(1 / [lfPulse(1 / 9, 0, 0.5) + 2, 3], 0, 0.5),
		0.1
	) / 4 + 0.3
);
let e = pitchShift(
	d / 2,
	2,
	[3, 2] - lag(lfPulse(1 / [18, 17], 0, 0.5), 0.1),
	0,
	0
);
hpf(d + e, 9) / 4 / 4
