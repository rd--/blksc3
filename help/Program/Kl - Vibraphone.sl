{- vibraphone simulation ; Kevin Larke ; Real Time Vibraphone Pitch and Timbre Classification -}
let voiceFunc = { :e |
	let freq = e.p.UnitCps;
	let detune = e.y * 15;
	let freqs = freq * [1, 4, 10, 13.75 + detune];
	let hifreqs = freq * [19.2, 20, 21.2];
	let modfreq = e.j * 4 + 3;
	let modamp = e.k * 2;
	let mod = LinLin(SinOsc(modfreq, TRand(0, 2 * pi, e.w)), -1, 1, 1 - ([0.5, 0.3, 0.3, 0.5] * modamp), 1);
	let velocity = Latch(e.z, e.w) * 2;
	let sound = 0.3 * [1, 1.1 * velocity, 0.6 * velocity * velocity, 0.5 * velocity] * SinOsc(freqs, 0);
	let decay = 0;
	let decays = [1, 0.7 * (-1 * decay).exp, 0.5 * (-1 * decay).exp, 0.4 * (-1 * decay).exp];
	let zero = 0.000001;
	let soundMain = TxLine(zero, 1, 1 / freqs, e.w) * TxLine(1, zero, decays * 4, e.w) * sound * mod;
	let soundHigh = TxLine(0.3 * (velocity + zero), zero, 0.02, e.w) * SinOsc(hifreqs, 0); {- hi frequency onset -}
	let pan = e.i * 2 - 1;
	Pan2(soundMain.sum + soundHigh.sum, pan, LagUd(e.w, 0.01, 4))
};
Voicer(1, 16, voiceFunc:/1).sum * 0.1
