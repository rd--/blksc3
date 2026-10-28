/* https://twitter.com/headcube/status/474064500564324352 (nv) ; packet size */
let o = { :ix |
	{
		lfPulse(
			2 ^ iRand(-9, 1),
			iRand(0, 2) / 2,
			0.5
		)
	} !* ix / (ix - 1) + 1
};
let z = {
	let f = 2.to(9).collect(o/1).product * 86;
	pluck(
		bpf(f, f, 1).sin,
		saw(440),
		1, 1 / f, 9, 0.5
	)
};
splay(z/0 ! 9) * 0.2
