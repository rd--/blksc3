/* Sc-140 ; 03 ; Tim Walters ; sc140_sourcecode.txt ; udp packet size */
0:15.collect { :k |
	0:7.collect { :i |
		let e = Decay(Dust(1 / 4 ^ i), SinOsc(0.1, 0) + 1 * k + i) * k * 999;
		let ph = SinOsc(i * k ^ i / [4, 5], 0) * e;
		SinOsc(i * k * k, ph)
	}.product
}.Mix
