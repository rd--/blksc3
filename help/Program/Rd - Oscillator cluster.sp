/* oscillator cluster (rd) */
{
	let np = 12;
	let tr = Dust(0.075);
	let prt = { :p |
		let d = p.first;
		let a = p.second;
		{ :cf |
			let o = SinOsc(TLine(5 + TRand(0, 1, tr), 0.01, d, tr), 0);
			let e = TLine(20 + TRand(0, 10, tr), 0, d, tr);
			let f = [cf, TRand(cf, cf + 2, tr)] + (o * e);
			SinOsc(f, 0) * Decay2(tr, TRand(0.1, 0.2, tr), d) * a
		}
	};
	let fp = { TRand(220, 660, tr) }! np;
	fp.collect(prt([TRand(4, 7, tr), TRand(0.01, 0.05, tr)])).Sum
} !+ 5
