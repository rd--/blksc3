/* https://sccode.org/1-5fc (dst) */
voicer(1, 16, { :e |
	let tr = trig(e.w, e.y * 0.002 + 0.001);
	let buf = [0, 7, 15.93, 5, 9.7, 12, 17.5, 13.1].localBuf;
	let samp = tExpRand(0.07, 0.5, tr);
	let root = tChoose(tr, [23, 30, 35, 37]);
	let atk = tExpRand(0.04, 0.3, tr);
	let decay = tExpRand(6, 15, tr);
	let amp = tRand(0.15, 0.5, tr);
	let bottom = tChoose(tr, [2, 5]);
	let top = tRand(7, 9.1, tr);
	let cfreq = e.x * 2300 + 120;
	let rq = samp + tRand(0.1, 0.15, tr);
	let rate = tExpRand(0.1, 3, tr);
	let index = linLin(lfSaw(samp, 0), -1, 1, bottom, top) * bufFrames(buf);
	let tonic = degreeToKey(buf, index, 12) + root;
	let env = decay2(tr, atk, decay) * 0.35;
	let sig = bpf(syncSaw(root.midiCps, tonic.midiCps) * env, cfreq, rq) * amp;
	let loc = pan2(sig, sinOsc(rate * 0.9 + rand(-0.6, 0.6), 0), 1);
	let cmb = combL(loc, 0.1, sinOsc(0.01, 0) * 0.03 + 0.07, 5) * 0.7;
	xFade2(lpf(cmb, 4800), loc, -0.5, 0.3)
}).sum
