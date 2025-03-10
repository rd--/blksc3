/* Sturmian Sequencer 3 (Jrhb) */
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
	let dt = 1 / SampleRate() / (n - i + 2) * MouseX(1, SampleRate(), 1, 0.2);
	TDuty(dt, 0, Dseq(Infinity, str - 0.5))
};
0.to(n - 1).collect(strFunc:/1).Splay2 * 0.3

# Notes

Mouse control.
