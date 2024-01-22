{- sturmian sequencer ii (jrhb) -}
var rules = [[0, 1], [0]];
var rewrite = { :m |
    var r = [0];
    var u = m.timesRepeat {
	    r := r.collect { :e |
		    rules[e + 1]
	    }.concatenation
    }; {- u = for translator -}
    r
};
var n = 7;
var strFunc = { :i |
    var str = rewrite(i + 6);
    var dt = 2 ** (n - i).negated * 20;
    var trig = TDuty(dt, 0, Dseq(1, str));
    var freq = TExpRand(200, (n - i) / n * 10100, trig);
    var trigFlt = Bpf(trig, LfNoise2(0.1) * 0.02 + 1 * freq, 0.2);
    Ringz(trigFlt, freq * [1, 1.1, 1.2], ExpRand(2 ** i.negated * 0.1, 0.5)).sum.Distort
};
0.to(n - 1).collect(strFunc:/1).Splay2 * 0.3
