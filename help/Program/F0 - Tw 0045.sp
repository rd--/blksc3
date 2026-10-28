/* F0 - Tw 0045 */
let f = sinOsc(
	sinOsc(0.11, 0),
	0
);
let pf = sinOsc(
	95 * (sinOsc(0.01, 0) +  1),
	0
) * (
	sinOsc(0.005, 0) * 50
) + 100;
let p = sinOsc(
	pf,
	sinOsc([98, 97], 0)
) * (1.pi + sinOsc(0.0005, 0));
sinOsc(f, p).tanh * 0.1

# Notes

[F0](http://www.fredrikolofsson.com/f0blog/?q=node/537)
