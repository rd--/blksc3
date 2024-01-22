{- tw 02 (tw) tim walters -}
var nd = { :k |
	var x = { :p |
		var f = p.at(1);
		var m = p.at(2);
		var j = p.at(3);
		SinOsc(f + (m * 4 * j), m) * LfNoise1(j + 1 / f * 4) / 2
	};
	var y = x.value([0.1, 0, 8]);
	var i = 1;
	var u = 9.timesRepeat({
		y := x.value([i * k * [4, 8], y, i]);
		i := i + 1
	}); {- u = for translator... -}
	y
};
1.to(8).collect(nd).sum / 4

{- ---- notes.md ---- -}
[swiki](https://swiki.hfbk-hamburg.de/MusicTechnology/899)
