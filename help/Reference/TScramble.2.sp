/* tScramble.2.sl */
var a = [
	1 2 3;
	1 2 3 4 5;
	1 2 3 4 5 6 7
];
var t1 = impulse(1 / 5, 0);
var t2 = impulse(5, 0);
var m = tChoose(
	t1,
	a.collect { :x |
		demand(t2, 0, dseq(Infinity, tScramble(t1, x)))
	}
);
var c = sinOsc(1200, 0) * decay(t1, 1) * 0.1;
sinOsc(m * 110, 0) * 0.1 + c

# tScramble

Sequences of different lengths, scrambled.

_tScramble_ requires _sc3-rdu_.
