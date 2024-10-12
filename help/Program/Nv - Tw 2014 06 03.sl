{- https://twitter.com/headcube/status/474064500564324352 (nv) -}
let o = { :ix |
	{
		LfPulse(
			2 ^ IRand(-9, 1),
			IRand(0, 2) / 2,
			0.5
		)
	} !* ix / (ix - 1) + 1
};
let z = {
	let f = 2.to(9).collect(o:/1).product * 86;
	Pluck(
		Bpf(f, f, 1).Sin,
		Saw(440),
		1, 1 / f, 9, 0.5
	)
};
Splay(z:/0 ! 9) * 0.2
