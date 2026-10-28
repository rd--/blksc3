/* Sturmian sequencer 2 (Jrhb) */
let rules = [[0, 1], [0]];
let rewrite = { :m |
    let r = [0];
    let u = m.timesRepeat {
	    r := r.collect { :e |
		    rules[e + 1]
	    }.catenate
    }; /* u = for translator */
    r
};
let n = 7;
let strFunc = { :i |
    let str = rewrite(i + 6);
    let dt = 2 ** (n - i).negate * 20;
    let trig = tDuty(dt, 0, dseq(1, str));
    let freq = tExpRand(200, (n - i) / n * 10100, trig);
    let trigFlt = bpf(trig, lfNoise2(0.1) * 0.02 + 1 * freq, 0.2);
    ringz(trigFlt, freq * [1, 1.1, 1.2], expRand(2 ** i.negate * 0.1, 0.5)).sum.distort
};
0.to(n - 1).collect(strFunc/1).splay2 * 0.3
