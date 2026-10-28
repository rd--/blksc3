/* lag.1 */
ringz(saw(linExp(lag(lfNoise0(5), 0.1), -1, 1, 100, 2000)) * 0.2, 1000, 0.01) * 0.1

# lag

- _lag(in, lagTime)_

Exponential lag.

- in: input signal
- lagTime: 60 dB lag time in seconds.

This is essentially the same as onePole except that instead of supplying the coefficient directly, it is caculated from a 60 dB lag time. This is the time required for the filter to converge to within 0.01% of a value. This is useful for smoothing out control signals.

Courtesy [Nc](https://composerprogrammer.com/teaching/supercollider/sctutorial/tutorial.html) 3.4
