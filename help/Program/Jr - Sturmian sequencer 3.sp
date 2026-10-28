/* Sturmian sequencer 3 (Jrhb) */
let rules = [[0, 1], [0]];
let rewrite = { :n |
	let r = [0];
	let u = n.timesRepeat {
		r := r.collect { :e |
			rules[e + 1]
		}.catenate
	};  /* u = for translator... */
	r
};
let n = 9;
let strFunc = { :i |
	let str = rewrite(i + 6);
	let dt = 1 / sampleRate() / (n - i + 2) * mouseX(1, sampleRate(), 1, 0.2);
	tDuty(dt, 0, dseq(Infinity, str - 0.5))
};
0.to(n - 1).collect(strFunc:/1).splay2 * 0.3

# Notes

Mouse control.
