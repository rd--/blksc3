(* localOut ; ping pong *)
var n = Decay(Impulse(0.3, 0), 0.1) * PinkNoise() * 0.2;
var l = LocalIn(2, 0) + [n, 0];
var d = DelayC(l, 0.2, 0.2);
var o = LocalOut(d.reversed * 0.8);
d <! o

(* ---- notes.md ---- *)
_n_ is pink noise is enveloped by a decaying impulse signal.

_l_ is the local input summed with _n_ in the left channel.

_d_ is _l_ delayed by 1/5 of a second.

_o_ sends the reverse of _d_, scaled by 4/5, to the local output.

The output of the program is _d_.

The ⅄ operator references _o_ so that it is included in the signal processing graph but otherwise ignores it.
