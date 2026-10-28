/* decay2 ; texture */
overlapTexture({ :tr |
	let e = decay2(
		impulse({ tRand(10, 13, tr) } ! 2, 0),
		tRand(0.001, 0.01, tr),
		tRand(0.005, 0.02, tr)
	);
	let a = sinOsc({ tRand(10, 13, tr) } ! 2, 0) * e * ({ tRand(4, 7, tr) } ! 2);
	let o = sinOsc({ tRand(2220, 2227, impulse(0.7, 0)) } ! 2, 0);
	o * a * 0.15
}, 2, 4, 2).mix

# decay2

- _decay2(in, attackTime, decayTime)_

Exponential decay.

- in: input signal
- attackTime: 60 dB attack time in seconds.
- decayTime: 60 dB decay time in seconds.

_decay_ has a very sharp attack and can produce clicks. _decay2_ rounds off the attack by subtracting one decay from another. _decay2(in, attackTime, decayTime)_ is equivalent to _decay(in, decayTime) - decay(in, attackTime)_.
