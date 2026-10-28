/* Sturmian sequencer 1 (Jr) */
let rules = [[0, 1], [0]];
let rewrite = { :n |
    let r = [0];
    let u = n.timesRepeat {
	    r := r.collect { :e |
		    rules[e + 1]
	    }.catenate
    }; /* u = for translator */
    r
};
let strFunc = { :i |
    let str = rewrite(i + 6);
    let dt = 2 ^ i.negate * 10;
    let trig = tDuty(dt, 0, dseq(1, str));
    let freq = expRand(200, i + 1 / 7 * 10100);
    ringz(trig, freq * [1, 1.2, 1.5], expRand(2 ^ i.negate * 0.1, 1.101)).sum.Distort
};
0.to(6).collect(strFunc:/1).splay2 * 0.3
