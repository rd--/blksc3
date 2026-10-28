/* lucier (cr) ; http://www.listarc.bham.ac.uk/lists/sc-users/msg47539.html */
let bus = 20;
overlapTexture({ :tr |
	let freq = tRand(56, 64, tr);
	let stringDelay = 1 / freq;
	let pk1Pos = 0.1;
	let srcPos = 0.3;
	let pk2Pos = 0.9;
	let maxDelay = 1;
	let mkDelay = { :p |
		let i = p.first;
		let r = p.second;
		lpz1(delayC(i, maxDelay, r * stringDelay))
	};
	let mkAllpass = { :p |
		let i = p.first;
		let r = p.second;
		let dt = p.third;
		lpz1(allpassC(i, maxDelay, r * stringDelay, dt))
	};
	let drv = inFb(1, bus);
	let pk1R = mkDelay([drv, srcPos - pk1Pos]);
	let pk1L = mkAllpass([pk1R * -1, pk1Pos * 2, tRand(0.001, 0.11, tr)]);
	let pk2L = mkDelay([pk1L, pk2Pos - pk1Pos]) * 0.99;
	let stringL = mkDelay([pk2L, 1 - pk2Pos]);
	let pk2R = mkAllpass([stringL * -1, 1 - pk2Pos, 2 + tRand(0.001, 0.11, tr)]) * 0.99;
	let stringR = mkDelay([pk2R, pk2Pos - srcPos]);
	let source = {
		let s = sinOsc(220, 0) * 0.01;
		let a = Amplitude(drv, 0.01, 0.01) * 11;
		let p = pulse(60 + a, 0.5) * 0.1;
		let f = rlpf(s + p, 320, 0.05);
		let e = 1 - Amplitude(drv, 0.01, 0.01).min(1);
		normalizer(f, 0.7, 0.01) * e
	}.nullaryApply;
	let lOut = replaceOut(bus, source * 0.2 + stringR);
	let outL = pk1L + pk1R;
	let outR = pk2L + pk2R;
	bus := bus + 1;
	[outL, outR] <! lOut <! drv
}, 1, 5, 3).mix * 0.25

# Notes

The `overlapTexture` variant cannot use `localIn` & `localOut`,
since there can only be one pair per graph.
