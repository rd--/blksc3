/* https://sccode.org/1-5fc (dst) */
Voicer(1, 16, { :e |
	let tr = Trig(e.w, e.y * 0.002 + 0.001);
	let buf = [0, 7, 15.93, 5, 9.7, 12, 17.5, 13.1].asLocalBuf;
	let samp = TExpRand(0.07, 0.5, tr);
	let root = TChoose(tr, [23, 30, 35, 37]);
	let atk = TExpRand(0.04, 0.3, tr);
	let decay = TExpRand(6, 15, tr);
	let amp = TRand(0.15, 0.5, tr);
	let bottom = TChoose(tr, [2, 5]);
	let top = TRand(7, 9.1, tr);
	let cfreq = e.x * 2300 + 120;
	let rq = samp + TRand(0.1, 0.15, tr);
	let rate = TExpRand(0.1, 3, tr);
	let index = LinLin(LfSaw(samp, 0), -1, 1, bottom, top) * BufFrames(buf);
	let tonic = DegreeToKey(buf, index, 12) + root;
	let env = Decay2(tr, atk, decay) * 0.35;
	let sig = Bpf(SyncSaw(root.MidiCps, tonic.MidiCps) * env, cfreq, rq) * amp;
	let loc = Pan2(sig, SinOsc(rate * 0.9 + Rand(-0.6, 0.6), 0), 1);
	let cmb = CombL(loc, 0.1, SinOsc(0.01, 0) * 0.03 + 0.07, 5) * 0.7;
	XFade2(Lpf(cmb, 4800), loc, -0.5, 0.3)
}).sum
