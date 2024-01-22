{- sturmian sequencer iii (jrhb) -}
var rules = [[0, 1], [0]];
var rewrite = { :n |
	var r = [0];
	var u = n.timesRepeat({
		r := r.collect({ :e | rules[e + 1] }).concatenation
	});  {- u = for translator... -}
	r
};
var n = 9;
var strFunc = { :i |
	var str = rewrite(i + 6);
	var dt = 1 / SampleRate() / (n - i + 2) * MouseX(1, SampleRate(), 1, 0.2);
	TDuty(dt, 0, Dseq(inf, str - 0.5))
};
0.to(n - 1).collect(strFunc:/1).Splay2 * 0.3

{- ---- notes.md ---- -}
Mouse control.
