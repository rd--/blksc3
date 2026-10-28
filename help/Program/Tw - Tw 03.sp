/* Sc-140 ; 03 ; Tim Walters ; sc140_sourcecode.txt ; udp packet size */
0:15.collect { :k |
	0:7.collect { :i |
		let e = decay(dust(1 / 4 ^ i), sinOsc(0.1, 0) + 1 * k + i) * k * 999;
		let ph = sinOsc(i * k ^ i / [4, 5], 0) * e;
		sinOsc(i * k * k, ph)
	}.product
}.mix
