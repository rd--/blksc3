(* https://www.listarc.cal.bham.ac.uk/lists/sc-users-2002/msg00534.html ; f0 *)
{
	var b = SfAcquire("floating_1", 1, [1]);
	 (* k-rate noise is linearly interpolated to audio rate phase *)
	var a = (LfNoise1(1.6) * 10000).RoundTo((LfNoise0(0.1) * 6400).Abs).kr;
	var z = {
		AllpassL(
			Pan2(SfRead(b, K2A(a), 1, 2), a / 10000, 1),
			0.1,
			{ Rand(0, 0.1) } ! 2,
			LfNoise1(0.1) * 0.4 + 0.4
		).sum
	} !+ 2;
	LeakDc(z, 0.995)
} !+ 2
