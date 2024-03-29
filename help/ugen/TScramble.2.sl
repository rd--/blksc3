{- TScramble.2.sl -}
var a = [
	1 2 3;
	1 2 3 4 5;
	1 2 3 4 5 6 7
];
var t1 = Impulse(1 / 5, 0);
var t2 = Impulse(5, 0);
var m = TChoose(
	t1,
	a.collect { :x |
		Demand(t2, 0, Dseq(inf, TScramble(t1, x)))
	}
);
var c = SinOsc(1200, 0) * Decay(t1, 1) * 0.1;
SinOsc(m * 110, 0) * 0.1 + c

{- ---- notes.md ---- -}
# TScramble

Sequences of different lengths, scrambled.

_TScramble_ requires _sc3-rdu_.
