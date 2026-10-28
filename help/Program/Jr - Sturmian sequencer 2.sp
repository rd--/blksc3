/* Sturmian sequencer 2 (Jrhb) */
var rules = [[0, 1], [0]];
var rewrite = { :m |
    var r = [0];
    var u = m.timesRepeat {
	    r := r.collect { :e |
		    rules[e + 1]
	    }.catenate
    }; /* u = for translator */
    r
};
var n = 7;
var strFunc = { :i |
    var str = rewrite(i + 6);
    var dt = 2 ** (n - i).negate * 20;
    var trig = tDuty(dt, 0, dseq(1, str));
    var freq = tExpRand(200, (n - i) / n * 10100, trig);
    var trigFlt = bpf(trig, lfNoise2(0.1) * 0.02 + 1 * freq, 0.2);
    ringz(trigFlt, freq * [1, 1.1, 1.2], expRand(2 ** i.negate * 0.1, 0.5)).sum.Distort
};
0.to(n - 1).collect(strFunc:/1).splay2 * 0.3
