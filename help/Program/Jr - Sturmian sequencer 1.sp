/* Sturmian Sequencer 1 (Jr) */
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
    let dt = 2 ^ i.negated * 10;
    let trig = TDuty(dt, 0, Dseq(1, str));
    let freq = ExpRand(200, i + 1 / 7 * 10100);
    Ringz(trig, freq * [1, 1.2, 1.5], ExpRand(2 ^ i.negated * 0.1, 1.101)).sum.Distort
};
0.to(6).collect(strFunc:/1).Splay2 * 0.3
