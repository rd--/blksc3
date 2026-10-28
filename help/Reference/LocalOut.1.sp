/* localOut.1.sl ; ping pong */
let n = decay(impulse(0.3, 0), 0.1) * pinkNoise() * 0.2;
let l = localIn(2, 0) + [n, 0];
let d = delayC(l, 0.2, 0.2);
let o = localOut(d.reverse * 0.8);
d <! o

# localOut

_n_ is pink noise is enveloped by a decaying impulse signal.

_l_ is the local input summed with _n_ in the left channel.

_d_ is _l_ delayed by 1/5 of a second.

_o_ sends the reverse of _d_, scaled by 4/5, to the local output.

The output of the program is _d_.

The ⅄ operator references _o_ so that it is included in the signal processing graph but otherwise ignores it.
