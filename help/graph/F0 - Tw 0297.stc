;; https://sccode.org/1-4Qy ; f0 ; 0297
(0 .. 3).collect({ :i |
	var c = SinOscFb(i + 1 / [6, 4], 0) / (SinOscFb(1 / [8, 9], 0) + 1.5);
	var d = c % DelayN(c, 0.2, 0.2);
	SinOscFb(1 + c ** i + i * 99, d) * Lag3(d, c % 1 / 99)
}).Splay2.transpose.sum / 3
