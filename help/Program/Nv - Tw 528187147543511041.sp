/* https://twitter.com/headcube/status/528187147543511041 (nv) */
let x = { :j |
	let y = { :i |
		(
			1 / 4 ^ (i - 1)
			*
			(
				LfNoise0(0.25 ^ (j - 1) / 8) > 0
				-
				LfPulse(2 ^ (i - 1) / 8, 0, 0.5)
			).abs
		)
	};
	let f = 32 ^ 1.to(10).collect(y/1).sum * 30;
	Pan2(Rlpf(Pulse(f, 0.3), Lag(f.signedSqrt, 2) * 30, 0.5), 0, 0.2)
};
1.to(4).collect(x/1).sum * 0.25
