/* https://www.listarc.cal.bham.ac.uk/lists/sc-users-2002/msg00534.html ; f0 */
{
	let b = sfAcquireMono('Floating');
	let a = (lfNoise1(1.6) * 10000).round((lfNoise0(0.1) * 6400).abs).kr;
	let z = {
		allpassL(
			pan2(sfRead(b, k2A(a), 1, 2), a / 10000, 1),
			0.1,
			{ rand(0, 0.1) } ! 2,
			lfNoise1(0.1) * 0.4 + 0.4
		).sum
	} !+ 2;
	leakDc(z, 0.995)
} !+ 2

# Notes

F0 [Sc-Users 2002](https://www.listarc.cal.bham.ac.uk/lists/sc-users-2002/msg00534.html)

Control rate noise is linearly interpolated to audio rate phase.
